"use client";
import { useState, useEffect } from "react"
import { createEvent } from "../actions/createEvent"  
export default function CreateEvent(props) {
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
            <div className="px-1">
                <h1>New Event Details</h1>
                <form className="p-3" action={createEvent}>
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
                    <div className="form-group">
                        <label htmlFor="descrptionInput">Description</label>
                        <textarea className="form-control"
                            id="descrptionInput" aria-describedby="descriptionHelp"
                            rows={3}
                            name="description"></textarea>
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
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="decorationsInput">Decorations</label>
                            <input type="text" className="form-control"
                                id="decorationsInput" aria-describedby="decorationsHelp"
                                name="decorations" />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="photosInput">Filming/Photos</label>
                            <input type="text" className="form-control"
                                id="photosInput" aria-describedby="decorationsHelp"
                                name="photos" />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="postersInput">Posters/Art Work</label>
                            <input type="text" className="form-control"
                                id="postersInput" aria-describedby="postersHelp"
                                name="posters" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="foodInput">Food/Drink</label>
                            <input type="text" className="form-control"
                                id="foodInput" aria-describedby="foodHelp"
                                name="food" />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="musicInput">Music</label>
                            <input type="text" className="form-control"
                                id="musicInput" aria-describedby="decorationsHelp"
                                name="music" />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <label htmlFor="computerInput">Computer-related Issues</label>
                            <input type="text" className="form-control"
                                id="computerInput" aria-describedby="computerHelp"
                                name="computer" />
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
            </div>
        )
    }
    return(
        <div>
            Loading...
        </div>
    )
}

