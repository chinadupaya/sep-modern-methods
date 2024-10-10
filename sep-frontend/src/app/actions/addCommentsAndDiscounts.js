'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function addCommentsAndDiscounts(eventRequest, formData) {
    const token = cookies().get('user');
    const user = JSON.parse(token.value);
    const requestForm = {
        discount: formData.get('comments'),
        comments: formData.get('discount'),
        userName: user.name,
        userId: user.id,
        userRole: user.role,
        status: 'comments-'+userRole
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