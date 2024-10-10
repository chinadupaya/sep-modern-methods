import { cookies } from 'next/headers';
import Link from 'next/link';
import CreateEventRequest from './CreateEventRequest';
import EventRequests from './EventRequest';

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
            <div>
                Create Event Request
                <CreateEventRequest />
            </div>
        )
    } else if(user.role == 'seniorcsmanager') {
        return(
            <div>
                <h2>Event Requests</h2>
                <EventRequests user={user} />
            </div>
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
      <h1>You need to login first!</h1>
      <Link href='/login'>Login Here</Link>
    </>
  );
};

export default Dashboard;