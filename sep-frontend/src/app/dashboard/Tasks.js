"use client";
import { useState, useEffect } from "react"
import FinancialManagerForm from "./FinancialManagerForm";
import Link from "next/link";

export default function Tasks(props) {
    const [tasks, setTasks] = useState([])
    const [ready, setReady] = useState(false);
    const user = props.user;

    const getSubject = (role) => {
        console.log("role", role)
        if(role=='photographer') {
            return 'Photos for '
        } else if (role == 'chef') {
            return 'Food/drinks for '
        }
        return 'nothing'
    }
    useEffect(() => {
        const user = props.user;
        let fetchString = `http://localhost:3000/tasks?staffId=${user.id}`
        console.log("fetchString ", fetchString);
        fetch(fetchString)
          .then((res) => res.json())
          .then((res) => {
            console.log("tasks", res.data)
            setTasks(res.data.tasks)
            setReady(true)
          })
      }, [])

    if (ready && tasks.length > 0){
        return(
            <div>
                <h2>My tasks </h2>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Task Subject</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ready && tasks.length > 0 && tasks.map((t) => {
                            return(
                            <tr key={t.id}>
                                <td scope="row">{getSubject(user.role)} {t.eventType}</td>
                                <td>{t.priority}</td>
                                <td>
                                    <Link href={`/tasks/${t.id}`}>View more</Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}