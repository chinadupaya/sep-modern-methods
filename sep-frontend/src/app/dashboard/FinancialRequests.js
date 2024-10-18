"use client";
import { useState, useEffect } from "react"
// import { putEventRequest } from "../actions/putEventRequest";
import ChangeFinancialRequestStatus from "./ChangeFinancialRequestStatus";

export default function ListStaffRequests(props) {
    const user = props.user;
    const financialRequests = props.financialRequests;
    const eventId = props.eventId;
    useEffect(() => {
      }, [])

    if (financialRequests.length > 0){
        return(
            <div className="container my-2">
            <h5>Financial Requests</h5>
            <div className="row">
                {financialRequests.map((x) => {
                    return(
                    <div key={x.id} className="card col col-xl-6">
                    <div className="card-header">
                        <h6 className="card-subtitle mb-2 text-muted">{x.status}</h6>
                        <div className="card-body">
                            <h5 className="card-title">{x.requestingDept}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Additional budget: {x.addedBudget}</h6>
                            <p>Reason: {x.reason}</p>
                            {
                                user.role=='financialmanager' &&
                                x.status != 'approved' &&
                                <ChangeFinancialRequestStatus eventId={eventId} financialRequest={x} />
                            }
                        </div>
                    </div>
                    </div>
                    )
                })}
            </div>
            </div>
        )
    } else if (financialRequests == 0) {
        return (
            <div>
                You currently have no financial requests
            </div>
        )
    }
    return(
        <div>Loading..</div>
    )


}