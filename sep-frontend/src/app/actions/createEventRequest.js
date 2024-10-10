'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function createEventRequest(formData) {
    const token = cookies().get('user');
    console.log("formdata ", formData);
    console.log("token ", token);
    const user = JSON.parse(token.value);
    const requestForm = {
        clientId: formData.get('clientId'),
        eventType: formData.get('eventType'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        expectedAttendees: formData.get('numberAttendees'),
        preferences: formData.getAll('preferences'),
        expectedBudget: formData.get('expectedBudget'),
        userName: user.name,
        userId: user.id,
        userRole: user.role
    }
    
    console.log("requestForm", requestForm);
    const response = await fetch(`http://localhost:3000/eventrequests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    console.log("result ", result);
    // if (result.error) {
    //     if (result.error) {
    //         // let resultError = NextResponse.json({ error: result.error, status: result.error.status });
    //         // return resultError
    //         return { error: result.error, status: result.error.status };
    //         // throw new Error('failed to login')
    //     }
    // }
    redirect('/')
}