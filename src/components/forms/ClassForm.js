import React from 'react';
import { useForm } from 'react-hook-form';
import { createClass } from '../../queries/classes';
import Heading from '../Heading';
import Input from '../Input';

const ClassForm = () => {
  const { register, handleSubmit } = useForm();

  const grabData = (data) => {

    // Create Request
    createClass({ name: data.className })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Heading title='Create Class!'></Heading>

      <div className='bg-white p-5 rounded-lg'>
        <form onSubmit={handleSubmit(grabData)}>
          <Input label="Class Name" register={register('className', { required: true })}></Input>
          <button type="submit" className='btn btn-primary px-14 mt-10'>Create Class</button>
        </form>
      </div>

    </div>
  );
};

export default ClassForm;