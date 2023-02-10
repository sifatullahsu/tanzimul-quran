import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getClasses } from '../../queries/classes';
import Select from 'react-select'
import Heading from '../Heading';
import Input from '../Input';
import { useQuery } from '@tanstack/react-query';
import { createFee } from '../../queries/fees';

const FeeForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: classes } = useQuery({ queryKey: ['classes'], queryFn: getClasses });

  const classesOptions = classes?.data?.map(classItem => {
    return { label: classItem.name, value: classItem._id };
  });

  const [selected, setSelected] = useState([]);


  const grabData = (data) => {

    const processSelected = selected.map(i => {
      const item = classes.data.find(ii => ii._id === i.value);

      return {
        classID: item._id,
        className: item.name,
        year: data.year
      }
    });

    const finalData = {
      name: data.name,
      amount: data.amount,
      classes: processSelected,
      metaInfo: { author: '63ddf503db2bf2384a51dc5b', created: new Date().toISOString(), lastModified: new Date().toISOString() }
    }

    createFee(finalData)
      .then(data => {
        console.log(data);
        reset();
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Heading title='Create Class!'></Heading>

      <div className='bg-white p-5 rounded-lg'>
        <form onSubmit={handleSubmit(grabData)}>

          <Input label="Fee Name" register={register('name', { required: true })}></Input>
          <Input label="Amount" register={register('amount', { required: true })}></Input>
          <Input label="Year" register={register('year', { required: true })}></Input>

          <div>
            <div className='text-sm mt-3 mb-2'>Select Classes</div>
            <Select defaultValue={selected} options={classesOptions} isMulti closeMenuOnSelect={false} isSearchable
              onChange={(i) => setSelected(i)} required={true}></Select>
          </div>

          <button type="submit" className='btn btn-primary px-14 mt-10'>Create Fee</button>
        </form>
      </div>
    </div>
  );
};

export default FeeForm;