'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export async function addCommentsAndDiscounts(eventRequest, formData) {
    const token = cookies().get('user');
    const user = JSON.parse(token.value);
    const requestForm = {
        discount: formData.get('discount'),
        comments: formData.get('comments'),
        userName: user.name,
        userId: user.id,
        userRole: user.role,
        status: 'comments-'+user.role
    }
    
    console.log("requestForm", requestForm);
    const response = await fetch(`http://localhost:3000/eventrequests/${eventRequest.id}`, {
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