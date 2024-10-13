"use client";
import { useState, useEffect } from "react"
import ChangeStaffRequestStatus from "./ChangeStaffRequestStatus";
// import { putEventRequest } from "../actions/putEventRequest";

const putStaffRequest = async(status, user, staffRequestId) => {
    const requestForm = {
        status: status + '-' + user.role,
        userName: user.name,
        userId: user.id,
        userRole: user.role
    }
    
    const response = await fetch(`http://localhost:3000/staffrequests/${staffRequestId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    
}

const getContractName=(x) => {
    if (x == 'parttime') return 'Part Time';
    else if(x=='fulltime') return 'Full Time';
    return 'Contract Type Unavailable'
}

export default function ListStaffRequests(props) {
    const user = props.user;
    const [staffRequests, setStaffRequests] = useState([])
    const [ready, setReady] = useState(false);
    useEffect(() => {
        let fetchString = 'http://localhost:3000/staffrequests'
        fetch(fetchString)
          .then((res) => res.json())
          .then((res) => {
            setStaffRequests(res.data.staffRequests)
            setReady(true)
          })
      }, [])

    if (ready && staffRequests.length > 0){
        return(
            <div className="container my-2">
            <h1>Staff Requests</h1>
            <div className="row">
                {staffRequests.map((x) => {
                    return(
                    <div key={x.id} className="card col col-xl-6">
                    <div className="card-header">
                        <h6 className="card-subtitle mb-2 text-muted">{x.jobTitle}</h6>
                        <div className="card-body">
                            <h5 className="card-title">Contract Type: {getContractName(x.contractType)}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Minimum Years of Experience: {x.yearsOfExperience}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Requesting Department: {x.requestingDept}</h6>
                            <p>Description: {x.jobDescription}</p>
                            <h5>Status: {x.status} </h5>
                            <ChangeStaffRequestStatus staffRequest={x}/>
                        </div>
                    </div>
                    </div>
                    )
                })}
            </div>
            </div>
        )
    } else if (ready && staffRequests == 0) {
        return (
            <div>
                You currently have no staff requests
            </div>
        )
    }
    return(
        <div>Loading..</div>
    )


}