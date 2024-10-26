'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function createTask(details, formData) {
    const token = cookies().get('user');
    console.log("details ", details);
    console.log("formdata ", formData);
    const user = JSON.parse(token.value);
    
    const event = details.events.filter(e => {
        return e.id == formData.get('eventId')
    })
    const staff = details.staff.filter(s => {
        return s.id == formData.get('staffId')
    })
    
    const requestForm = {
        eventId: event[0].id,
        eventType: event[0].eventType,
        description: formData.get('description'),
        
        priority: formData.get('priority'),
        userName: staff[0].name,
        userId: staff[0].id,
        userRole: staff[0].role
    }
    
    const response = await fetch(`http://localhost:3000/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    redirect('/')
}