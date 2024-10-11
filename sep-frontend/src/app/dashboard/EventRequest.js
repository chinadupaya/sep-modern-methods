"use client";
import { useState, useEffect } from "react"
import FinancialManagerForm from "./FinancialManagerForm";
// import { putEventRequest } from "../actions/putEventRequest";

const putEventRequest = async(status, user, eventRequestId) => {
    const requestForm = {
        status: status + '-' + user.role,
        userName: user.name,
        userId: user.id,
        userRole: user.role
    }
    
    const response = await fetch(`http://localhost:3000/eventrequests/${eventRequestId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    
}

export default function EventRequests(props) {
    const [eventRequests, setEventRequests] = useState([])
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const user = props.user;
        let fetchString = 'http://localhost:3000/eventrequests'
        if(user.role == 'financialmanager') {
            fetchString += '?status=accept-seniorcsmanager'
        } else if (user.role=='adminmanager') {
            fetchString += '?status=comments-financialmanager'
        }
        console.log("fetchString ", fetchString);
        fetch(fetchString)
          .then((res) => res.json())
          .then((res) => {
            console.log(JSON.stringify(res.data.eventRequests))
            setEventRequests(res.data.eventRequests)
            setReady(true)
          })
      }, [])

    if (ready && eventRequests.length > 0){
        return(
            <div className="container">

            <div className="row">
                {eventRequests.map((x) => {
                        return(
                        <div key={x.id} className="card col col-xl-6">
                            <div className="card-header">
                                <h6 className="card-subtitle mb-2 text-muted">Client Id</h6>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Event Type: {x.eventType}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Client Id {x.clientId}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Preferences</h6>
                                <ul className="list-group list-grou-flush">
                                    {x.preferences.map((p,i) => {
                                        return(
                                            <li class="list-group-item w-50" key={i}>{p}</li>
                                        )
                                    })}
                                </ul> 
                                {/* <a href="#" className="card-link">Accept</a>
                                <a href="#" className="card-link">Reject</a> */}
                            </div>
                            <div className="card-body">
                                <div className="row my-1">
                                    <div className="col">
                                        Start Date: {new Date(x.startDate).toDateString()}
                                    </div>
                                    <div className="col">
                                        End Date: {new Date(x.endDate).toDateString()}
                                    </div>
                                    <div className="col-12">
                                        Expected Budget: SEK {x.expectedBudget}
                                    </div>
                                    <div className="col-12">
                                        Comments: {!x.comments ? 'None' : x.comments}
                                    </div>
                                    <div className="col-12">
                                        Discount: {!x.discount ? 'None' : x.discount+'%'}
                                    </div>
                                </div>
                                <p className="card-text text-primary">Status: {x.status}</p>
                            </div>
                            <div className="card-body">
                                <p>Updated by: {x.updatedBy.name} - {x.updatedBy.role}</p>
                            </div>
                            {/* for senior cs manager */}
                            {((x.status == 'created' && props.user.role == 'seniorcsmanager') || (x.status =='comments-financialmanager' && props.user.role=='adminmanager')) &&
                                <div className="card-body"> 
                                <button type="button" class="btn btn-success" style={{marginRight: 1 + 'rem'}} onClick={() => {
                                    putEventRequest('accept', props.user, x.id);
                                    location.reload();
                                }}>Accept</button>
                                <button type="button" class="btn btn-danger" onClick = {() =>{
                                    putEventRequest('reject', props.user, x.id);
                                    location.reload();
                                }}>Reject</button>
                                </div>
                            }
                            {/* for financial manager */}
                            {x.status == 'accept-seniorcsmanager' && props.user.role =='financialmanager' && 
        
                                <FinancialManagerForm eventRequest={x} user={props.user}/>
                            }
                        </div>
                        )
                })}
            </div>
            </div>
        )
    } else if (ready && eventRequests == 0) {
        return (
            <div>
                You currently have no event requests
            </div>
        )
    }
    return(
        <div>Loading..</div>
    )


}