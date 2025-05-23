import { cookies } from 'next/headers';
import Link from 'next/link';
import { logout } from './actions/logout';

const getUser = () => {
    const token = cookies().get('user');
    
    console.log("token " +JSON.stringify(token));
    if(token) {
        let user = JSON.parse(token.value);
        if(user) {
            return user
        }
    }
    return null;
};

function NavItems(input) {
    console.log("user " +JSON.stringify(input));
    if(!input || input == null || input.user==null) {
        return(
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">
                Login
                </a>
            </li>
        )
    }
    return(
        <form className="container-fluid justify-content-start" action={logout}>
            <button className="btn btn-outline-danger me-2" type="submit">Logout</button>
        </form>
    )
}

export default function Navbar() {
    const user = getUser();
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SEP Event Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/dashboard">
                  Home
                </a>
              </li>
            {<NavItems user={user} />}
            </ul>
          </div>
        </div>
      </nav>
    )
}