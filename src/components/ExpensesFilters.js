import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpensesFilters extends React.Component {
  state = {
    focused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (focused) => {
    this.setState(() => ({ focused }));
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div>
            <input
              className="text-input"
              type="text"
              placeholder="Search"
              value={this.props.filters.text}
              onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
              }}
            />
          </div>
          <div>
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={(e) => {
                this.props.dispatch(e.target.value === 'amount' ? sortByAmount() : sortByDate());
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="dateRangeStart"
              endDate={this.props.filters.endDate}
              endDateId="dateRangeEnd"
              id="dateRangeId"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              id="dateRangeCalendar"
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpensesFilters);