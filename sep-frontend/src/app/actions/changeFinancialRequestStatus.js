'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export async function changeFinancialRequestStatus(details, formData) {
    const eventId = details.eventId;
    const financialRequest = details.financialRequest;
    const requestForm = {
        status: formData.get('status')
    }

    const response = await fetch(`http://localhost:3000/events/${eventId}/financialrequests/${financialRequest.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    redirect('/')
}