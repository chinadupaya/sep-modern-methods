'use client'
 
import { useFormStatus } from 'react-dom'
 
export function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <button type="submit" aria-disabled={pending} className="btn btn-primary mt-1">
      Login
    </button>
  )
}