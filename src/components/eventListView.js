import React from 'react';
import PropTypes from 'prop-types';
import Manager from './Manager';
import AddModal from './AddModal';
import Modal from './Modal';
import Rows from './Rows';
import RemoveConfirm from './RemoveConfirm';
import { Cities } from '../support/supportFunc';

const styles = {
	container: {
		width: '100%',
		background: '#fafafa',
	    display: 'flex',
        flexDirection: 'column',
    	justifyContent: 'flex-start',
    	alignItems: 'center',
    	marginTop: '5em',
	},
	content: {
		width: '40%',
		background: 'white',
	    display: 'flex',
        flexDirection: 'column',
    	justifyContent: 'flex-start',
    	alignItems: 'center',
    	minHeight: '300px',
	    borderRadius: '2px',
	},
	head: {
	    width: '100%',
	    background: '#00bcd6',
	    textAlign: 'center',
	    fontFamily: 'calibri',
	    color: 'white',
	},
	events: {
	    width: '90%',
	    display: 'flex',
        flexDirection: 'column',
    	justifyContent: 'flex-start',
    	alignItems: 'center',
    	margin: '1em 0',
	}
}

export default class EventListView extends React.Component {

	componentDidMount(){
		this.props.citiesLoading(Cities);
	}

	render() {
		const {
			toggleEventModal,
			toggleRemoveModal,
			showModal,
			removeModal,
			changeNewParameter,
			addEventToList,
			removeEvent,
			citiesList,
			eventList,
			selectEvet,
			searchEvents,
		} = this.props;

		return (
			<div style={styles.container} >
				<div style={styles.content} >
					<div style={styles.head}>
						<h1>Мероприятия</h1>
					</div>
					<div style={styles.events}>
						<Manager 
							showEventModal={toggleEventModal}
							showRemoveModal={toggleRemoveModal}
							searchEvents={searchEvents}
						/>
						<Rows 
							eventList={eventList}
							selectEvet={selectEvet}
						/>
					</div>
					{	showModal ? 
						<Modal>
							<AddModal 
								onChangeParam = {changeNewParameter}
								onSaveEvent = {addEventToList}
								onRejectEvent = {toggleEventModal}
								citiesList={citiesList}
							/>
						</Modal> :
						undefined
					}
					{	removeModal ?
						<Modal removeModal={removeModal}>
							<RemoveConfirm
								removeSelected={removeEvent}
								cancelRemove={toggleRemoveModal}
							/>
						</Modal> :
						undefined
					}
				</div>
			</div>
		)
	}
};

EventListView.propTypes = {
	showModal: PropTypes.bool.isRequired,
	removeModal: PropTypes.bool.isRequired,
	eventList: PropTypes.array.isRequired,
	citiesList: PropTypes.array.isRequired,
	toggleEventModal: PropTypes.func.isRequired,
	toggleRemoveModal: PropTypes.func.isRequired,
	changeNewParameter: PropTypes.func.isRequired,
	addEventToList: PropTypes.func.isRequired,
	removeEvent: PropTypes.func.isRequired,
	selectEvet: PropTypes.func.isRequired,
	searchEvents: PropTypes.func.isRequired,
}