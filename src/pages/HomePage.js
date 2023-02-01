import React from 'react';
import Heading from '../components/Heading';
import Loading from '../components/Loading';
import Login from '../components/Login';
import { useAuth } from '../contexts/AuthProvider';

const HomePage = () => {

  const { user, userLoading } = useAuth();


  if (userLoading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <main id='content'>
      <div className="container">
        <Heading
          title='Login'
          text='Are you a registered, please login.'
        ></Heading>
        <Login></Login>
      </div>
    </main>
  );
};

export default HomePage;