
import { login } from '../actions/login'
import { LoginButton } from './LoginButton'

export default async function LoginComponent(props) {
  return(
    <div className="card border-light my-3" style={{maxWidth:45+'rem'}}>
      <div className="card-header">SEP Events Management System</div>
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <p className="card-text">Enter your email and password.</p>
      </div>
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
    </div>
  )
}

