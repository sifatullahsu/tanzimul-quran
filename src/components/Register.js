import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAuth } from '../contexts/AuthProvider';
import { createUser } from '../queries/users';

const Register = () => {
  const { userRegister, setUserLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();


  const handleRgister = (formData) => {
    reset();
    const { email, password } = formData;

    userRegister(email, password)
      .then(result => {
        const uid = result.user.uid;

        createUser({ uid, email })
          .then(data => {
            console.log(data);
            toast.success('Login successfull..');
          })
          .catch(err => console.log(err))

      })
      .catch(err => {
        toast.error('Somthing is wrong..');
        setUserLoading(false);
      })
  }

  return (
    <form onSubmit={handleSubmit(handleRgister)}>

      <div className="form-control">
        <label className="label"><span className="label-text">Email</span></label>
        <input type='mail' {...register("email", { required: true })} />
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text">Password</span></label>
        <input type='password' {...register("password", { required: true })} />
      </div>

      <button type="submit" className='btn btn-primary w-full mt-5'>Register Now</button>

    </form>
  );
};

export default Register;