import * as _ from 'lodash';

const initialState = { 
	newEvent: {},
	showEventModal: false,
	showRemoveModal: false,
	citiesList: [],
	eventList: [{
		name: 'Название',
		date: 'Дата',
		place: 'Место проведения',
		selected: false,
		isRow: false,
		visible: true,
		id: 0,
	}], 
};

export default function(state = initialState, action) {
	const clone = Object.assign({}, state);
	let newList = Object.assign([], clone.eventList);
	switch (action.type) {
		case 'citiesLoading':
			clone.citiesList = action.list;
			return clone;
		case 'toggleEventModal':
			clone.showEventModal = !clone.showEventModal;
			return clone;
		case 'toggleRemoveModal':
			const canShow = clone.eventList.filter(item => {
				return item.id > 0 && item.selected;
			})
			if (!clone.showRemoveModal && canShow.length) {
				clone.showRemoveModal = true;
			} else if (clone.showRemoveModal) {
				clone.showRemoveModal = false;
			} 
			return clone;
		case 'addParameter':
			clone.newEvent[action.param.paramName] = action.param.value;
			return clone;
		case 'removeEvent':
			for (let i = newList.length - 1; i >= 0; i--) {
				if (newList[i].selected && i) {
					newList.splice(i, 1);
				}
			}
			clone.showRemoveModal = !clone.showRemoveModal;	
			clone.eventList = newList;
			return clone;
		case 'searchEvent':
			let isPresent = false;
			let eventName = '';
			const actionName = action.name.toLowerCase();
			
			newList.forEach((event, id) => {
				eventName = event.name ? event.name.toLowerCase() : '';
				isPresent = eventName.indexOf(actionName) !== -1;
				if (action.name) {
					if (id && isPresent) {
						newList[id].visible = true;
					} else if (id&& !isPresent) {
						newList[id].visible = false;
					}
				} else {
					newList[id].visible = true;
				}
			})
			clone.eventList = newList;
			return clone;
		case 'selectEvent':
			const rowId = _.findIndex(newList, { id: +action.id });
			const isSelected = newList[rowId].selected;

			if (!rowId && !isSelected) {
				newList.forEach((event, id) => {
					newList[id] = Object.assign({}, event, { selected: true })
				})
			} else if (rowId && isSelected) {
				newList[0].selected = false;
				newList[rowId].selected = !isSelected;
			} else {
				newList[rowId].selected = !isSelected;
			}
			clone.eventList = newList;
			return clone;
		case 'addEventToList':
			if (_.findIndex(clone.eventList, clone.newEvent) === -1) {
				const newId = _.maxBy(clone.eventList, 'id').id + 1;
				const newEvent = Object.assign(
					{}, 
					clone.newEvent, 
					{ 
						selected: false, 
						isRow: true,
						visible: true,
						id: newId,
					}
				)
				clone.eventList.push(newEvent);
				clone.newEvent = {};
				clone.showEventModal = false;
				return clone;
			}
			return state;
		default:
			return state;
	}
}