import { cookies } from 'next/headers';
import Link from 'next/link';

const getUser = () => {
  const token = cookies().get('user');
  const user = JSON.parse(token.value);
  return user;
};

const Dashboard = () => {
  const user = getUser();
  if (user) {
    return <h1>Welcome to your dashboard, {user.name}.</h1>;
  }
  return (
    <>
      <h1>You need to create an account first!</h1>
      <Link href='/'>Create your account</Link>
    </>
  );
};

export default Dashboard;