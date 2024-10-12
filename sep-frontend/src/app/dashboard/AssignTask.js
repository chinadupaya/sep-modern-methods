"use client";
import { useState, useEffect } from "react";
import { createTask } from "../actions/createTask";

export default function AssignTask(props) {
    const [staff, setStaff] = useState([])
    const [events, setEvents] = useState([])
    const [ready, setReady] = useState(false);

    const createTaskWithStaffEvent = createTask.bind(null, {
        staff: staff,
        events: events
    })
    useEffect(() => {
        let roleQuery;
        let user = props.user
        if(user.role == 'productionmanager'){
            roleQuery ='photographer'
        } else if (user.role == 'servicesmanager') {
            roleQuery == 'chef'
        }
        fetch(`http://localhost:3000/staff?role=${roleQuery}`)
          .then((res) => res.json())
          .then((res) => {
              console.log("staff", JSON.stringify(res.data.staff))
            setStaff(res.data.staff)
        });

        fetch(`http://localhost:3000/events`)
            .then((res) => res.json())
            .then((res) => {
                console.log("Events", JSON.stringify(res.data.events))
                setEvents(res.data.events)
                setReady(true);
        });
        
      }, [])


    if(ready){
        return (
            <div className="px-1">
                <form className="p-3" action={createTaskWithStaffEvent}>
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
                    {staff.length > 0 &&
                        <div className="form-group"> 
                        <label htmlFor="staffInput">Assign To</label>       
                        <select name="staffId" className="form-select" aria-label="Select staff" id="staffInput">
                            {staff.map((staff) => {
                                return(
                                <option key={staff.id} value={staff.id}>
                                    {staff.name}
                                </option>
                                )
                            })} 
                        </select>
                    </div>
                    }
                    
                    <div className="form-group">
                        <label htmlFor="descrptionInput">Description</label>
                        <textarea className="form-control"
                            id="descrptionInput" aria-describedby="descriptionHelp"
                            rows={3}
                            name="description"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                        <label htmlFor="priorityInput">Priority</label>
                        <select name="priority" className="form-select" aria-label="Select priority" id="priorityInput">
                            <option value='high'>
                                High
                            </option>
                            <option value='medium'>
                                Medium
                            </option>
                        </select>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-1">
                        Submit Task
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

