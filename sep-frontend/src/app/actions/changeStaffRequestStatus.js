'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export async function changeStaffRequestStatus(staffRequest, formData) {
    const requestForm = {
        status: formData.get('status')
    }
    
    console.log("requestForm", requestForm);
    const response = await fetch(`http://localhost:3000/staffrequests/${staffRequest.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    console.log("result ", result);
    redirect('/')
}