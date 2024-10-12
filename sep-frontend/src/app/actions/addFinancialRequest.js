'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export async function addFinancialRequest(formData) {
    const eventId = formData.get('eventId')
    const requestForm = {
        requestingDept: formData.get('requestingDept'),
        addedBudget: formData.get('addedBudget'),
        reason: formData.get('reason'),
    }
    console.log("add financial request form", requestForm);
    const response = await fetch(`http://localhost:3000/events/${eventId}/financialrequests`, {
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