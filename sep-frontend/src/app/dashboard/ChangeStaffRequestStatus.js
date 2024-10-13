import { changeStaffRequestStatus } from "../actions/changeStaffRequestStatus";

export default function ChangeStaffRequestStatus(props) {
    const staffRequest = props.staffRequest;
    const changeStatusRequestWithId = changeStaffRequestStatus.bind(null, staffRequest)
    return(
        <form className="p-3" action={changeStatusRequestWithId}>
            <div className="form-group">
                <label htmlFor="statusInput">Change Status</label>
                <input type="text" className="form-control" 
                    id="statusInput" aria-describedby="commentsHelp"
                    placeholder="Enter new status"
                    name="status" />
                <small id="statusHelp" className="form-text text-muted">Update the status of this staff request</small>
            </div>

            <button type="submit" className="btn btn-primary mt-1">
                Submit
            </button>
        </form> 
    )
}