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

      
    </div>
  );
}
