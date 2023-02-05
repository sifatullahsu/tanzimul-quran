import React from 'react';

const Input = ({ label, type = "text", register, parentClass }) => {

  return (
    <div className={`form-control ${parentClass ? parentClass : ''}`}>
      <div>{label}</div>
      <input type={type} {...register} />
    </div>
  );
};

export default Input;