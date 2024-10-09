"use client";
import { useState, useEffect } from "react"
import { createEventRequest } from "../actions/createEventRequest"  
export default function CreateEventRequest(props) {
    const [clients, setClients] = useState([])
    const [ready, setReady] = useState(false);
    useEffect(() => {
        fetch('http://localhost:3000/clients')
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data.clients)
            setClients(res.data.clients)
            setReady(true)
          })
      }, [])


    if(ready){
        return (
            <form className="p-3" action={createEventRequest}>
                {clients.length > 0 &&
                    <div className="form-group"> 
                    <label htmlFor="eventType">Client</label>       
                    <select name="clientId" className="form-select" aria-label="Select client" id="clientInput">
                        {clients.map((client) => {
                            return(
                            <option key={client.id} value={client.id}>
                                {client.name}
                            </option>
                            )
                        })} 
                    </select>
                </div>
                }
                
                <div className="form-group">
                    <label htmlFor="eventType">Event Type</label>
                    <input type="text" className="form-control"
                        id="eventTypeInput" aria-describedby="eventTypeHelp"
                        placeholder="Enter event type"
                        name="eventType" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="startDateInput">Event Start</label>
                        <input type="date" className="form-control"
                            id="startDateInput" aria-describedby="startDateHelp"
                            name="startDate" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="endDateInput">Event End</label>
                        <input type="date" className="form-control"
                        id="endDateInput" aria-describedby="endDateHelp"
                        name="endDate" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <label htmlFor="numberAttendeesInput">Expected Number of Attendees</label>
                        <input type="number" className="form-control"
                        id="numberAttendeesInput" aria-describedby="numberAttendeesInput"
                        name="numberAttendees" />
                    </div>
                </div>
                {/* TO DO: Make checkboxes */}
                <div className="row">
                    <div className="col">
                    <label htmlFor="preferencesInput">Preferences</label>
                    <select id="preferencesInput" className="form-select custom-select" multiple name="preferences">
                        <option value="decorations">Decorations</option>
                        <option value="parties">Parties</option>
                        <option value="photos">Photos/filming</option>
                        <option value="meals">Breakfast, lunch, dinner</option>
                        <option value="drinks">Soft/hot drinks</option>
                    </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <label htmlFor="expectedBudgetInput">Expected Budget(SEK)</label>
                        <input type="number" className="form-control"
                        id="expectedBudgetInput" aria-describedby="expectedBudgetInput"
                        name="expectedBudget" />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary mt-1">
                    Submit Event Request
                </button>
            </form>
        )
    }
    return(
        <div>
            Loading...
        </div>
    )
}

