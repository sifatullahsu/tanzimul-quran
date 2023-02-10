import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../components/Heading';
import { getFees } from '../../queries/fees';

const Fees = () => {

  const { data: fees } = useQuery({ queryKey: ['fees'], queryFn: getFees });
  console.log(fees);
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
            <tr>
              <th><label><input type="checkbox" className="checkbox" /></label></th>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Fees;