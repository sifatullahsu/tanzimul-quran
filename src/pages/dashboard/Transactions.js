import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../components/Heading';
import { getTransactions } from '../../queries/transactions';

const Transactions = () => {

  const { data: transactions } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });


  return (
    <div>
      <Heading title='Transactions'></Heading>

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

export default Transactions;