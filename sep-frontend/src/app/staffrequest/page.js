"use client";
import { useState, useEffect } from "react"
// import FinancialManagerForm from "./FinancialManagerForm";
import { addStaffRequest } from "../actions/addStaffRequest";

export default function StaffRequests(props) {
    useEffect(() => {
      }, [])

    return(
        <div className = "p-1">
            <a href="/dashboard" class="btn btn-secondary">Go Back</a>
            <h2>Request Additional Staff</h2>
            <form className="p-3" action={addStaffRequest}>
            <div class="form-group col-md-4">
                <label for="contractTypeInput">Contract Type</label>
                <select id="contractTypeInput" class="form-control" name='contractType'>
                    <option value='fulltime' selected>Full Time</option>
                    <option value='parttime'>Part time</option>
                </select>
            </div>
            <div className="form-group col-md-4">
                <label for="contractTypeInput">Requesting Department</label>
                <select id="contractTypeInput" class="form-control" name='requestingDept'>
                    <option value='administration' selected>Administration</option>
                    <option value='production'>Production</option>
                    <option value='services'>Services</option>
                    <option value='financial'>Financial</option>
                </select>
            </div>
            <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="experienceInput">Minimum Years of Experience</label>
                    <input type="number" className="form-control"
                    id="experienceInput" aria-describedby="experienceInputHelp"
                    name="yearsOfExperience" />
                </div>
            </div>
            <div className="form-group col-md-8">
                <label htmlFor="jobTitleInput">Job Title</label>
                <input type="text" className="form-control"
                id="jobTitleInput" aria-describedby="jobTitleHelp"
                name="jobTitle" />
            </div>
            <div className="form-group">
                <label htmlFor="jobDescrptionInput">Job Description</label>
                <textarea className="form-control"
                    id="jobDescrptionInput" aria-describedby="descriptionHelp"
                    rows={3}
                    name="jobDescription"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-1">
                Submit
            </button>
        </form> 
        </div>
    )


}