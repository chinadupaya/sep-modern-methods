"use client";
import { useState, useEffect } from "react"
import FinancialRequests from "./FinancialRequests";
// import { putEventRequest } from "../actions/putEventRequest";
import EventStatus from "./EventStatus";

export default function Events(props) {
    const [events, setEvents] = useState([])
    const [ready, setReady] = useState(false);
    const user = props.user;
    useEffect(() => {
        let fetchString = 'http://localhost:3000/events'
        fetch(fetchString)
          .then((res) => res.json())
          .then((res) => {
            console.log("events", res.data.events)
            setEvents(res.data.events)
            setReady(true)
          })
      }, [])

    if (ready && events.length > 0){
        return(
            <div className="container">

            <div className="row">
                {events.map((x) => {
                    return(
                    <div key={x.id} className="card col col-xl-6">
                    <div className="card-header">
                        <h6 className="card-subtitle mb-2 text-muted">Event Type: {x.eventType}</h6>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Event Details</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Client Id: {x.clientId}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Description: {x.description}</h6>
                        <h6>Preferences</h6>
                        <ul>
                            <li>
                                Decorations: {x.preferences.decorations} <br />
                            </li>
                            <li>
                            Music: {x.preferences.music} <br />
                            </li>
                            <li>
                            Photos: {x.preferences.photos} <br />
                            </li>
                            <li>
                            Posters: {x.preferences.posters} <br />
                            </li>
                            <li>
                            Food/Drink: {x.preferences.food} <br />
                            </li>
                            <li>
                            Computer-related: {x.preferences.computer} <br />
                            </li>  
                        </ul>
                        <h5>Expected Attendees: {x.expectedAttendees}</h5>
                        <h5>Expected Budget: {x.expectedBudget} SEK</h5>
                        <FinancialRequests user={user} financialRequests={x.financialRequests} eventId={x.id}/>
                        <EventStatus status={x.status} user={user} eventId={x.id}/>
                    </div>
                    </div>
                    )
                })}
            </div>
            </div>
        )
    } else if (ready && events == 0) {
        return (
            <div>
                You currently have no events
            </div>
        )
    }
    return(
        <div>Loading..</div>
    )


}