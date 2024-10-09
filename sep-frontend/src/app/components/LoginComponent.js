
import { login } from '@/app/actions/login'
import { LoginButton } from './LoginButton'

export default async function LoginComponent(props) {
  return(
    <form className="p-3" action={login}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"/>
        </div>
        <LoginButton/>
      </form> 
  )
}

