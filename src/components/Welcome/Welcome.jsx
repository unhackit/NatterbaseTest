import React from 'react';
import './Welcome.css'

let now = new Date();

let weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let monthnames = new Array(12);

monthnames[0] = "January";
monthnames[1] = "February";
monthnames[2] = "March";
monthnames[3] = "April";
monthnames[4] = "May";
monthnames[5] = "June";
monthnames[6] = "July";
monthnames[7] = "August";
monthnames[8] = "September";
monthnames[9] = "October";
monthnames[10] = "November";
monthnames[11] = "December"



let date = now.getDate();
let day = weekday[now.getDay()];
let month = monthnames[now.getMonth()];
let year = now.getFullYear();

const Welcome = () => (
    <div className="container-fluid">
        <div className="row pt-5 pb-5">
            <div className="col-md-12">
                <h1 className="welcome-heading">Welcome, Lois!</h1>
                <p className="welcome-timer">{day + ', ' + month + " " + date + ', ' + year}</p>
            </div>
        </div>
    </div>
)

export default Welcome;