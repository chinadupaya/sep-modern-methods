"use client";
import { useState, useEffect } from "react"
import { addTaskComments } from "../../actions/addTaskComments";

export default function TaskDetails(params) {
    const [task, setTask] = useState(null)
    const [ready, setReady] = useState(false);
    const addTaskCommentsWithTask = addTaskComments.bind(null, {
        task: task
    })
    useEffect(() => {
        console.log("params", params)
        let fetchString = `http://localhost:3000/tasks/${params.params.id}`
        console.log("fetchString ", fetchString);
        fetch(fetchString)
          .then((res) => res.json())
          .then((res) => {
            console.log("task", res.data)
            setTask(res.data.task)
            setReady(true)
          })
      }, [])
    return(ready && task && 
        <div className="px-1"> 
            <a href="/dashboard" class="btn btn-secondary">Go Back</a>
            <h1>
                Task details for <i>{task.eventType}</i>
            </h1>
            <p>
                Priority: {task.priority} <br />
                Description: {task.description} <br />
                Comments: {task.comments ? task.comments : 'no comments'}
            </p>
            <form className="p-3" action={addTaskCommentsWithTask}>
                <div className="form-group">
                    <label htmlFor="commentsInput">Create new comment</label>
                    <textarea className="form-control"
                        id="commentsInput" aria-describedby="commentsHelp"
                        rows={3}
                        name="comments"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-1">
                    Submit
                </button>    
            </form>
        </div>
    )
}