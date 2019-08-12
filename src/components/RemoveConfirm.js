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
	 	padding: '.5em',
	},
	modalHead: {
		padding: '.5em',
		fontWeight: 'bold',
		fontFamily: 'Helvetica, Roboto, Verdana',
	 	color: 'gray',
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

export default function RemoveConfirm (props)  {

return (
	<div style={classes.container}>
		<div style={classes.modalHead}>
			<h2>Вы действительно хотите удалить выбранные?</h2>
		</div>

		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<div>
				<div style={classes.buttonsBlock}>
					<Button 
						style={classes.buttons} 
						className={classes.button}
						onClick={props.removeSelected}
					>
						Да
					</Button>
					<Button 
						style={classes.buttons}
						className={classes.button}
						onClick={props.cancelRemove}
					>
						Нет
					</Button>
					
				</div>
			</div>
		</MuiPickersUtilsProvider>
	</div>
)};

RemoveConfirm.propTypes = {
	removeSelected: PropTypes.func.isRequired,
	cancelRemove: PropTypes.func.isRequired,
}
