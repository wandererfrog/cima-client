import React, { Component } from 'react';
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class DatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      focused : false
    }
  }

  toggleFocused (){
    this.setState({
      focused : !this.state.focused
    })
  }

  render() {
    const {selection,onUpdateSelect,title,name,minimumDate} = this.props
    console.log(name,minimumDate);
    return (
      <div className="select-container">
        <div className="select-title">{title}</div>
        <SingleDatePicker
          small
          isOutsideRange={
            day => (!minimumDate) ? day.isoWeekday() !== 1 || !day.isSameOrBefore(moment()) : day.isoWeekday() !== 1 || !day.isSameOrAfter(minimumDate) || !day.isSameOrBefore(moment())
          }
          horizontalMargin={20}
          numberOfMonths={1}
          date={selection} // momentPropTypes.momentObj or null
          onDateChange={date => onUpdateSelect(name,date)} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id={`${title}-date`} // PropTypes.string.isRequired,
        />
      </div>
    );
  }

}

export default DatePicker;
