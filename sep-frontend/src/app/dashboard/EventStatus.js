"use client";
import { useState, useEffect } from "react"
// import { putEventRequest } from "../actions/putEventRequest";
import { changeEventStatus } from "../actions/changeEventStatus";

function getDept(role) {
    if (role=='productionmanager') {
        return 'Change Status for Production Department'
    } else if (role == 'servicesmanager') {
        return 'Change Status for Services Department'
    }
    return ''
}

export default function EventStatus(props) {
    const user = props.user;
    const status = props.status;
    const eventId = props.eventId;
    const changeEventStatusWithId = changeEventStatus.bind(null, eventId)
    useEffect(() => {
      }, [])

    return(
        <div>
            Production: {status.production ? status.production : 'Unknown Status'} <br/> 
            Services: {status.services ? status.services : 'Unknown Status'} <br/> <br/>
            {
                (user.role == 'productionmanager' || user.role == 'servicesmanager') && 
                <div>
                    <h6>{getDept(user.role)}</h6>
                    <form className="p-3" action={changeEventStatusWithId}>
                    <div className="form-group">
                    <select name="status" className="form-select" aria-label="Select status" id="priorityInput">
                        <option>
                            Select status
                        </option>
                        <option value='inprogress'>
                            In Progress
                        </option>
                        <option value='closed'>
                            Closed
                        </option>
                    </select>
                    </div>

                    <button type="submit" className="btn btn-primary mt-1">
                        Submit
                    </button>
                    </form> 
                </div>
            }
        </div>
    )
    


}