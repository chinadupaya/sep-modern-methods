'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export async function addTaskComments(details, formData) {
    const task = details.task
    const requestForm = {
        comments: formData.get('comments'),
    }
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    console.log("result ", result);
    redirect('/dashboard')
}