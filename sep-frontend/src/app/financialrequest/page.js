"use client";
import { useState, useEffect } from "react"
import { addFinancialRequest } from "../actions/addFinancialRequest";

import Link from "next/link";

export default function FinancialRequest(props) {
    const [events, setEvents] = useState(false);
    const [ready, setReady] = useState(false);
    const user = props.user;

    useEffect(() => {
        const user = props.user;
        fetch(`http://localhost:3000/events`)
            .then((res) => res.json())
            .then((res) => {
                setEvents(res.data.events)
                setReady(true);
            })
    }, [])

    if (ready) {
        return (
            <div>
                <a href="/dashboard" class="btn btn-secondary">Go Back</a>
                <h2>Request Additional Budget</h2>
                <form className="p-3" action={addFinancialRequest}>
                    <div className="form-group col-md-4">
                        <label for="requestingDeptInput">Requesting Department</label>
                        <select id="requestingDeptInput" class="form-control" name='requestingDept'>
                            <option value='administration' selected>Administration</option>
                            <option value='production'>Production</option>
                            <option value='services'>Services</option>
                            <option value='financial'>Financial</option>
                        </select>
                    </div>
                    {events.length > 0 &&
                        <div className="form-group"> 
                        <label htmlFor="eventType">Event</label>       
                        <select name="eventId" className="form-select" aria-label="Select event" id="eventInput">
                            {events.map((event) => {
                                return(
                                <option key={event.id} value={event.id}>
                                    {event.eventType}
                                </option>
                                )
                            })} 
                        </select>
                    </div>
                    }
                    <div className="row">
                    <div className="col-md-8">
                    <label htmlFor="addedBudgetInput">Expected Additional Budget(SEK)</label>
                        <input type="number" className="form-control"
                        id="addedBudgetInput" aria-describedby="expectedBudgetInput"
                        name="addedBudget" />
                    </div>
                </div>
                    <div className="form-group">
                        <label htmlFor="reasonInput">Reason</label>
                        <textarea className="form-control"
                            id="reasonInput" aria-describedby="reasonHelp"
                            rows={3}
                            name="reason"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-1">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}