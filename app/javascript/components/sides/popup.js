import React from 'react'

export default class Popup extends React.Component {

 
    render() {
        let employees = this.props.listOfemployees.map((e, i) => {
            return <option key={i}>{e.first_name} {e.last_name} ({e.occupation})</option>
        })
        return (
            <div className="popup">
                <div className="form_container">
                    <label for="employee">Employee</label>
                        <select className="popup_form">
                            {employees}
                        </select><br/>

                    <label for="day">Day</label>
                        <select className="popup_form">
                            <option value="mon">Monday</option>
                            <option value="tues">Tuesday</option>
                            <option value="wed">Wednesday</option>
                            <option value="thurs">Thursday</option>
                            <option value="fri">Friday</option>
                            <option value="sat">Saturday</option>
                            <option value="sun">Sunday</option>
                        </select><br/>

                    <label for="start_time">Star Time</label>
                        <select className="popup_form">
                            <option value="9">9:00 AM</option>
                            <option value="10">10:00 AM</option>
                            <option value="11">11:00 AM</option>
                            <option value="12">12:00 PM</option>
                            <option value="13">1:00 PM</option>
                            <option value="14">2:00 PM</option>
                            <option value="15">3:00 PM</option>
                            <option value="16">4:00 PM</option>
                            <option value="17">5:00 PM</option>
                            <option value="18">6:00 PM</option>
                            <option value="19">7:00 PM</option>
                            <option value="20">8:00 PM</option>
                            <option value="21">9:00 PM</option>
                            <option value="22">10:00 PM</option>
                        </select><br/>

                    <label for="end_time">End Time</label>
                        <select className="popup_form">
                            <option value="10">10:00 AM</option>
                            <option value="11">11:00 AM</option>
                            <option value="12">12:00 PM</option>
                            <option value="13">1:00 PM</option>
                            <option value="14">2:00 PM</option>
                            <option value="15">3:00 PM</option>
                            <option value="16">4:00 PM</option>
                            <option value="17">5:00 PM</option>
                            <option value="18">6:00 PM</option>
                            <option value="19">7:00 PM</option>
                            <option value="20">8:00 PM</option>
                            <option value="21">9:00 PM</option>
                            <option value="22">10:00 PM</option>
                        </select><br/>
                    <button className="form_button" onClick={() => this.props.closePopup()}>Schedule!</button>
                    <button className="form_button" onClick={() => this.props.closePopup()}>Close</button>
                </div>
            </div> 
        ) 
    }
  }

