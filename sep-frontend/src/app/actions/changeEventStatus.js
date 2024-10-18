'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

function getUserDepartment(role){
    if (role == 'productionmanager') {
        return 'production'
    } else if (role == 'servicesmanager') {
        return 'services'
    }
    return;
}

export async function changeEventStatus(eventId, formData) {
    const token = cookies().get('user');
    const user = JSON.parse(token.value);
    const requestForm = {
        status: formData.get('status'),
        department: getUserDepartment(user.role)
    }

    const response = await fetch(`http://localhost:3000/events/${eventId}/status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    redirect('/')
}