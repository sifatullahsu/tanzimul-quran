import React from 'react';
import Heading from '../Heading';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import { useAuth } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { getClasses } from '../../queries/classes';
import { createStudent } from '../../queries/students';

const StudentForm = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const { data: classes, isLoading } = useQuery({ queryKey: ['classes'], queryFn: getClasses });

  const grabData = (data) => {
    const classItem = data.className.split(" | ");

    const finalData = {
      name: data.student,
      fatherName: data.father,
      motherName: data.mother,
      address: {
        present: data.present,
        permanent: data.permanent
      },
      localGuardian: {
        name: data.guardian,
        relation: data.relation,
        number: data.number,
        presentAddress: data.guardianPresent
      },
      academic: [
        {
          classID: classItem[0],
          className: classItem[1],
          roll: data.roll,
          session: data.session,
          isCurrent: true
        }
      ],
      advanceDeposit: 0,
      metaInfo: {
        author: '63ddf503db2bf2384a51dc5b',
        created: new Date().toISOString(),
        lastModified: new Date().toISOString()
      }
    }

    createStudent(finalData)
      .then(data => console.log(data))
      .catch(err => console.log(err))

  }

  if (isLoading) return <div>Loading</div>

  return (
    <div>
      <Heading title='Create Student!'></Heading>

      <div className='bg-white p-5 rounded-lg'>
        <form onSubmit={handleSubmit(grabData)}>

          <div className='grid grid-cols-1 gap-2'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-2'>

              <Input label="Student's Name" register={register('student', { required: true })}></Input>
              <Input label="Father's Name" register={register('father', { required: true })}></Input>
              <Input label="Mother's Name" register={register('mother', { required: true })}></Input>
              <div className="form-control">
                <div>Class</div>
                <select defaultValue='' {...register("className")}>
                  <option value='' disabled>select class</option>
                  {classes?.data?.map(classItem => <option key={classItem._id} value={`${classItem._id} | ${classItem.name}`}>{classItem.name}</option>)}
                </select>
              </div>
              <Input label="Roll" register={register('roll', { required: true })}></Input>
              <Input label="Session" register={register('session', { required: true })}></Input>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2'>

              <Input label="Present Address" register={register('present', { required: true })}></Input>
              <Input label="Permanent Address" register={register('permanent', { required: true })}></Input>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-2 mt-10 p-5 pb-8 rounded-lg bg-neutral'>

              <div className="form-control">
                <div>Local Guardian</div>
                <select defaultValue='' {...register("localGuardian")}>
                  <option value='' disabled>select guardian</option>
                  <option value='father'>Father</option>
                  <option value='mother'>Mother</option>
                  <option value='others'>Others</option>
                </select>
              </div>

              <Input label="Guardian's Name" register={register('guardian', { required: true })}></Input>
              <Input label="Relation" register={register('relation', { required: true })}></Input>
              <Input label="Mobile Number" register={register('number', { required: true })}></Input>
              <Input label="Present Address" register={register('guardianPresent', { required: true })} parentClass='col-span-2'></Input>

            </div>

          </div>


          <div className='mt-10'>
            <button type="submit" className='btn btn-primary px-14'>Create Student</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default StudentForm;



/* 

<div className="form-control">
  <label className="label"><span className="label-text">Session</span></label>
  <input type="text" />
</div> 

*/