'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export async function addStaffRequest(formData) {
    const requestForm = {
        contractType: formData.get('contractType'),
        requestingDept: formData.get('requestingDept'),
        yearsOfExperience:formData.get('yearsOfExperience'),
        jobTitle:formData.get('jobTitle'),
        jobDescription: formData.get('jobDescription')
    }
    const response = await fetch(`http://localhost:3000/staffrequests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestForm),
    });
    const result = await response.json();
    console.log("result ", result);
    redirect('/dashboard')
}