import { changeFinancialRequestStatus } from "../actions/changeFinancialRequestStatus";

export default function ChangeFinancialRequestStatus(props) {
    const financialRequest = props.financialRequest;
    const eventId = props.eventId
    const changeFinancialRequestStatusWithId = changeFinancialRequestStatus.bind(null, {
        financialRequest: financialRequest,
        eventId: eventId
    })
    return(
        <form className="p-3" action={changeFinancialRequestStatusWithId}>
            <div className="form-group">
            <select name="status" className="form-select" aria-label="Select status" id="priorityInput">
                <option>
                    Select decision
                </option>
                <option value='approved'>
                    Accepted
                </option>
                <option value='rejected'>
                    Rejected
                </option>
            </select>
            </div>

            <button type="submit" className="btn btn-primary mt-1">
                Submit
            </button>
        </form> 
    )
}