import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../components/Heading';
import { getClasses } from '../../queries/classes';
import { FaEdit } from 'react-icons/fa';

const Classes = () => {

  const { data: classes } = useQuery({ queryKey: ['classes'], queryFn: getClasses });

  return (
    <div>
      <Heading title='Classes'></Heading>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full shadow">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Class Name</th>
              <th className='text-right'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              classes?.data.map((classItem, i) => {
                return (
                  <tr key={classItem?._id}>
                    <th><label><input type="checkbox" className="checkbox" /></label></th>
                    <th>{i + 1}</th>
                    <td>{classItem?.name}</td>
                    <td className='text-right'>
                      <FaEdit className='inline'></FaEdit>
                    </td>
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

export default Classes;