import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';

const styles = {
	container: {
		width: '100%',
	 	paddingLeft: '2em',
	},
	modalHead: {
		padding: '.5em',
		fontWeight: 'bold',
		fontFamily: 'Helvetica, Roboto, Verdana',
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

export default function AddModal (props)  {

return (
	<div style={styles.container}>
		<div style={styles.modalHead}>
			<h2>Добавление мероприятия</h2>
		</div>

		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<div>
				<TextField
			        id="standard-name"
			        label="Название"
			        style={styles.formControl}
			        margin="normal"
					onChange={(e) => props.onChangeParam({ value: e.target.value, paramName: 'name' })}
			      />
			</div>
			<div>
				<KeyboardDatePicker
					margin="normal"
					id="mui-pickers-date"
					label="Дата"
			        style={styles.formControl}
					onChange={(date) => 
						props.onChangeParam({ 
							value: moment(date.toISOString()).format("DD-MM-YYYY") , 
							paramName: 'date' 
						})
					}							
					KeyboardButtonProps={{
					'aria-label': 'change date',
					}}
				/>
			</div>
			<div>
				<FormControl style={styles.formControl}>
					<InputLabel htmlFor="age-native-simple">Место</InputLabel>
					<Select
						native
						onChange={(e) => props.onChangeParam({ value: e.target.value, paramName: 'place' })}
					>						
						{
							props.citiesList.map(city => <option key={city.value} value={city.value}>{city.value}</option>)
						}
					</Select>
				</FormControl>
			</div>
			<div>
				<div style={styles.buttonsBlock}>
					<Button 
						style={styles.buttons}
						className={styles.button}
						onClick={props.onRejectEvent}
					>
						Отмена
					</Button>
					<Button 
						style={styles.buttons} 
						className={styles.button}
						onClick={props.onSaveEvent}
					>
						Добавить
					</Button>
				</div>
			</div>
		</MuiPickersUtilsProvider>
	</div>
)};

AddModal.propTypes = {
	onChangeParam: PropTypes.func.isRequired,
}
