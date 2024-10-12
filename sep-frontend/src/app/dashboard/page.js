import { cookies } from 'next/headers';
import Link from 'next/link';
import CreateEventRequest from './CreateEventRequest';
import EventRequests from './EventRequest';
import AssignTask from './AssignTask';
import Tasks from './Tasks';

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
                <a className="btn btn-primary" href="/staffrequest">
                    Request Additional Staff
                </a>
                <div>
                    <h2>
                        Events
                    </h2>
                    <a className="btn btn-primary" href="/create-event">
                        Create Event
                    </a>
                </div>
                <div>
                    <h2>Event Requests</h2>
                    <EventRequests user={user} />
                </div>
            </div>
        )
    } else if(user.role=='adminmanager') {
        return(
            <div>
                <a className="btn btn-primary" href="/staffrequest">
                    Request Additional Staff
                </a>
                <h2>Event Requests</h2>
                <EventRequests user={user} />
            </div>
        )
    } else if(user.role == 'financialmanager') {
        return(
            <div>
                <a className="btn btn-primary" href="/staffrequest">
                    Request Additional Staff
                </a>
                <h2>Event Requests</h2>
                <EventRequests user={user} />
            </div>
        )
    } else if(user.role == 'productionmanager' || user.role=='servicesmanager') {
        return(
            <div>
                <a className="btn btn-primary" href="/staffrequest">
                    Request Additional Staff
                </a>
                <h2>Assign Tasks</h2>
                <AssignTask user={user} />
            </div>
        )
    } else if (user.role== 'photographer' || user.role == 'chef') {
        return(<div>
            <Tasks user={user} />
        </div>)
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