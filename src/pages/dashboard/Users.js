import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../components/Heading';
import { getUsers } from '../../queries/users';

const Users = () => {

  const { data: users } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  return (
    <div>
      <Heading title='Users'></Heading>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full shadow">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Class</th>
              <th>Roll</th>
              <th>Guardian Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.data?.map((user, i) => {
                return (
                  <tr key={user._id}>
                    <th><label><input type="checkbox" className="checkbox" /></label></th>
                    <th>{i + 1}</th>
                    <td>{user.email}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Users;