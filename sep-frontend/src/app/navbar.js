import { cookies } from 'next/headers';
import Link from 'next/link';

const getUser = () => {
    const token = cookies().get('user');
    const user = JSON.parse(token.value);
    if(user) {
        return user
    }
    return false;
};

function NavItems(user) {
    if(!user) {
        return(
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">
                Login
                </a>
            </li>
        )
    }
    return(
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
            Logout
            </a>
        </li>
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
            <NavItems user={user} />
            </ul>
          </div>
        </div>
      </nav>
    )
}