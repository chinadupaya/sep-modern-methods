'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function login(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

const response = await fetch(`http://localhost:3000/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    });
const result = await response.json();
if (result.error) {
    // let resultError = NextResponse.json({ error: result.error, status: result.error.status });
    // return resultError
    return { error: result.error, status: result.error.status };
    // throw new Error('failed to login')
}
cookies().delete('user'),
cookies().set('user', JSON.stringify(result))
redirect('/')
}