'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function createEvent(formData) {
    const token = cookies().get('user');
    console.log("formdata ", formData);
    const user = JSON.parse(token.value);
    const requestForm = {
        clientId: formData.get('clientId'),
        eventType: formData.get('eventType'),
        description: formData.get('description'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        
        decorations: formData.get('decorations'),
        photos: formData.get('photos'),
        posters: formData.get('posters'),
        food: formData.get('food'),
        music: formData.get('music'),
        computer: formData.get('computer'),
        
        expectedBudget: formData.get('expectedBudget'),
        userName: user.name,
        userId: user.id,
        userRole: user.role
    }
    
    console.log("requestForm", requestForm);
    const response = await fetch(`http://localhost:3000/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    redirect('/dashboard')
}