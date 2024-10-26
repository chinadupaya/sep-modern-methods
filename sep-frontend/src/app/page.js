import Image from "next/image";
import styles from "./page.module.css";
import { cookies } from "next/headers";
// import LoginComponent from "@/app/login/LoginComponent";

function UserRender(user) {
  console.log("user" + JSON.stringify(user))
  if(user.name) {
    return <p>Welcome {user.name}!</p>
  }
}

export default function Home() {
  const cookieStore = cookies();
  const user = (cookieStore.get('user'))
  return (
    <div>
      <h1>Welcome to Swedish Event Planners Home</h1>
      {user &&
        <div>
          <p><a className="link-offset-3 link-underline-primary link-primary" href="/dashboard">Dashboard</a></p>
        </div>
      }
    </div>
  );
}
