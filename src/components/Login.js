import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAuth } from '../contexts/AuthProvider';

const Login = () => {
  const { userLogin, setUserLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();


  const handleLogin = (formData) => {
    reset();
    const { email, password } = formData;

    userLogin(email, password)
      .then(result => {
        toast.success('Login successfull..');
      })
      .catch(err => {
        toast.error('Somthing is wrong..');
        setUserLoading(false);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>

        <div className="form-control">
          <label className="label"><span className="label-text">Email</span></label>
          <input type='mail' {...register("email", { required: true })} />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Password</span></label>
          <input type='password' {...register("password", { required: true })} />
        </div>

        <button type="submit" className='btn btn-primary w-full mt-5'>Login Now</button>

      </form>
    </div>
  );
};

export default Login;