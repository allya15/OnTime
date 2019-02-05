import React from 'react'
import ScheduleTable from './empScheduleTable'
import dateFns from "date-fns";

export default class Schedule extends React.Component {
    render() {
        const clickedDay = this.props.currentDay;
        const numDay = clickedDay.getDate();
        const month = clickedDay.getMonth();
        const year = clickedDay.getFullYear();
        const date = new Date(year, month, numDay);
        const formatDate = dateFns.format(date, 'dddd, MMMM Do, YYYY');

        return(

            <div className="day_schedule"><br/><br/>
                        <button className="daily_back_button" onClick={() => this.props.backClick()}>
                            <i className="fas fa-arrow-alt-circle-left"></i>
                            Back
                        </button>
                <div className="date-header-container">

                        <h2>{formatDate}</h2>


                        <ScheduleTable employees={this.props.employees} shifts={this.props.shifts} currentDay={this.props.currentDay} />

                </div>
            </div>
        )
    }
}



