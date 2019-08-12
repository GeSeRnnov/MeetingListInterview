import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const styles = {
	container: {
	    display: 'flex',
	    width: '90%',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    background: '#e8e8e8',
	    borderTopLeftRadius: '4px',
	    borderTopRightRadius: '4px',
        border: '1px solid #e8e8e8',
	},
	buttonsBlock: {
	    display: 'flex',
	    width: '2.5em',
	    justifyContent: 'space-between',
    	marginLeft: '1em',
	},
	buttons: {
		fontSize: '1.5em',
	    cursor: 'pointer',
	},
	search: {
		width: '40%',
		margin: '0',
    	marginRight: '1em',
	},
}

export default function Manager (props) {

	const {
		showEventModal,
		showRemoveModal,
		searchEvents,
	} = props;

	return (
		<div style={styles.container}>
			<div style={styles.buttonsBlock}>			
				<div style={styles.buttons} onClick={showEventModal}>+</div>
				<div style={styles.buttons} onClick={showRemoveModal}>-</div>
			</div>
			<TextField
		        label="Поиск"
		        style={styles.search}
		        margin="normal"
				onChange={(e) => searchEvents(e.target.value)}
	      	/>
		</div>
	)
}

Manager.propTypes = {
	showEventModal: PropTypes.func.isRequired,
	showRemoveModal: PropTypes.func.isRequired,
	searchEvents: PropTypes.func.isRequired,
}