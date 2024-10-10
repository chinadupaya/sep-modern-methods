import { addCommentsAndDiscounts } from "../actions/addCommentsAndDiscounts";

export default function FinancialManagerForm(props) {
    const eventRequest = props.eventRequest;
    const addCommentsAndDiscountsWithId = addCommentsAndDiscounts.bind(null, eventRequest)
    return(
        <div className="card-body"> 
        <form className="p-3" action={addCommentsAndDiscountsWithId}>
            <div className="form-group">
                <label htmlFor="commentsInput">Comments</label>
                <input type="text" className="form-control" 
                    id="commentsInput" aria-describedby="commentsHelp"
                    placeholder="Enter comments"
                    name="comments" />
                <small id="commentsHelp" className="form-text text-muted">Add any comments about this event request.</small>
            </div>
            <div className="row">
                <div className="col-md-8">
                <label htmlFor="discountInput">Discount (%)</label>
                    <input type="number" className="form-control"
                    id="discountInput" aria-describedby="discountInput"
                    name="discount" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-1">
                Submit
            </button>
        </form> 
        </div>
    )
}