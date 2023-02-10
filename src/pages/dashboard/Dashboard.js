import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const Dashboard = () => {

  const { user } = useAuth();

  return (
    <div>
      <div>Email: {user?.email}</div>
      {
        !user?.email &&
        <Link to='/'>Home</Link>
      }
    </div>
  );
};

export default Dashboard;