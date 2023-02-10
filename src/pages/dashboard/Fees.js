import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../components/Heading';
import { getFees } from '../../queries/fees';

const Fees = () => {

  const { data: fees } = useQuery({ queryKey: ['fees'], queryFn: getFees });

  return (
    <div>
      <Heading title='Fees'></Heading>

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
              fees?.data?.map((fee, i) => {
                return (
                  <tr key={fee._id}>
                    <th><label><input type="checkbox" className="checkbox" /></label></th>
                    <th>{i + 1}</th>
                    <td>{fee.name}</td>
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

export default Fees;