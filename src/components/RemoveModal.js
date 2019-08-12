import React from 'react';
import PropTypes from 'prop-types';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

const classes = {
	container: {
		width: '100%',
	 	paddingLeft: '2em',
	},
	modalHead: {
		padding: '.5em',
		fontWeight: 'bold',
		fontFamily: 'Calibri, Helvetica, Roboto, Verdana',
	},
	formControl: {
	    width: '70%',
	    marginBottom: '1em',
	  },
	buttonsBlock: {
	    display: 'flex',
	    padding: '1em 0.5em',
	    justifyContent: 'flex-end',
	},
	buttons: {
	    color: '#23c2d4',
	},
};

export default function RemoveModal (props)  {


return (
	<div style={classes.container}>
		<div style={classes.modalHead}>
			<h2>Добавление мероприятия</h2>
		</div>

		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<div>
				<div style={classes.buttonsBlock}>
					<Button 
						style={classes.buttons}
						className={classes.button}
						onClick={props.onRejectEvent}
					>
						Отмена
					</Button>
					<Button 
						style={classes.buttons} 
						className={classes.button}
						onClick={props.onSaveEvent}
					>
						Добавить
					</Button>
				</div>
			</div>
		</MuiPickersUtilsProvider>
	</div>
)};

RemoveModal.propTypes = {
	onRejectEvent: PropTypes.func.isRequired,
	onSaveEvent: PropTypes.func.isRequired,
}
