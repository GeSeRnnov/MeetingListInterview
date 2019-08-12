import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
	container: {
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    width: '90%',
        border: '1px solid #e8e8e8',
	},
	row: {
		width: '100%',
	    display: 'flex',
	    alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5em 0',
        border: '1px solid #e8e8e8',
        textAlign: 'center',
        fontFamily: 'calibri, verdana',
	},
	firstRow: {
		color: 'gray',
	},
	checkbox: {
		width: '5%',
	},
	name: {
		width: '30%',
	    wordBreak: 'break-word',
	},
	date: {
		width: '25%',
	},
	place: {
		width: '30%',
	    wordBreak: 'break-word',
	    marginRight: '.5em',
	},
}

const getRow = (event, selectEvet, id) => {
	if (event.visible) {
		const rowStyle = id ? 
			styles.row :
			Object.assign({}, styles.row, styles.firstRow);

		return <div key={event.id} style={rowStyle}>
			<div style={styles.checkbox}>
				<Checkbox 
					color="primary"
					id={`${event.id}`}
					className="event-checkbox"
					checked={event.selected}
					onChange={(e) => selectEvet(e.target.id)}
				/>
			</div>
			<div style={styles.name}>
				{`${event.name || ''}`}
			</div>
			<div style={styles.date}>
				{`${event.date || ''}`}
			</div>
			<div style={styles.place}>
				{`${event.place || ''}`}
			</div>

		</div> 
}}

export default class Rows extends React.Component {
	render() {
		const {
			eventList,
			selectEvet,
		} = this.props;

		return (
			<div style={styles.container}>
				{
					eventList.map((eventItem, id) => getRow(eventItem, selectEvet, id))
				}
			</div>
		)
	}
};

Rows.propTypes = {
	eventList: PropTypes.array.isRequired,
	selectEvet: PropTypes.func.isRequired,
}
