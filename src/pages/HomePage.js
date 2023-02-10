import React from 'react';
import Heading from '../components/Heading';
import Loading from '../components/Loading';
import Login from '../components/Login';
import Register from '../components/Register';
import { useAuth } from '../contexts/AuthProvider';

const HomePage = () => {

  const { userLoading } = useAuth();


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
        <Register></Register>
      </div>
    </main>
  );
};

export default HomePage;