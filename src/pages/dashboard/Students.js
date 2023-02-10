import React from 'react';
import Heading from '../../components/Heading';
import { useQuery } from '@tanstack/react-query';
import { getStudents } from '../../queries/students';
import { getCurrentClass } from '../../helpers/helpers';

const Students = () => {

  const { data: students } = useQuery({ queryKey: ['students'], queryFn: getStudents });


  return (
    <div>
      <Heading title='Students'></Heading>

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
              students?.data?.map((student, i) => {
                return (
                  <tr key={student?._id}>
                    <th><label><input type="checkbox" className="checkbox" /></label></th>
                    <th>{i + 1}</th>
                    <td>{student?.name}</td>
                    <td>{getCurrentClass(student?.academic, 'className')}</td>
                    <td>{getCurrentClass(student?.academic, 'roll')}</td>
                    <td>{student?.localGuardian?.name}</td>
                    <td>12/16/2020</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;