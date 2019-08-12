import './App.css';
import { connect } from 'react-redux';
import EventListView from './components/eventListView'

const mapStateToProps = (store) => ({
	showModal: store.showEventModal,
	removeModal: store.showRemoveModal,
	eventList: store.eventList,
	citiesList: store.citiesList,
});

const mapDispatchToProps = dispatch => ({
	toggleEventModal: () => dispatch({ type: 'toggleEventModal' }),
	toggleRemoveModal: () => dispatch({ type: 'toggleRemoveModal' }),
	changeNewParameter: (param) => dispatch({ type: 'addParameter', param }),
	addEventToList: () => dispatch({ type: 'addEventToList' }),
	selectEvet: (id) => dispatch({ type: 'selectEvent', id }),
	removeEvent: () => dispatch({ type: 'removeEvent' }),
	searchEvents: (name) => dispatch({ type: 'searchEvent', name }),
	citiesLoading: (list) => dispatch({ type: 'citiesLoading', list }),
})

const meetingList = connect(mapStateToProps, mapDispatchToProps)(EventListView);
export default meetingList;


