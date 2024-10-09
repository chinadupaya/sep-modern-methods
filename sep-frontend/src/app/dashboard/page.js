import { cookies } from 'next/headers';
import Link from 'next/link';
import CreateEventRequest from './CreateEventRequest';

const getUser = () => {
  const token = cookies().get('user');
  if(token) {

      const user = JSON.parse(token.value);
      return user;
  }
  return null;
};

const checkUserRole = (user) => {
    if(user.role == 'customerservice') {
        return(
            <CreateEventRequest />
        )
    } 
    return (<div></div>)
}



const Dashboard = () => {
  const user = getUser();
  if (user) {
    return( 
    <div>
        <h1>Welcome to your dashboard, {user.name}.</h1>
        {checkUserRole(user)}
    </div>
    )
  }
  
  return (
    <>
      <h1>You need to create an account first!</h1>
      <Link href='/'>Create your account</Link>
    </>
  );
};

export default Dashboard;