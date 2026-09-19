import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
   const {
    register,
    handleSubmit,
    formState: { errors }
   } = useForm();
          
    function onsubmit(data) {
    console.log("submitting the form", data);
    }

  return (
  <div>
   <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username', {
          required: true,
          minLength: {value:3, message: "Min length atleast 3"},
        })}/>
        {errors.username && <p>{errors.message}</p>}
      </div>
      <br/>

    <div>
      <label>Email</label>
      <input {...register('email', {
        required: true,
      })}/>
    </div> 
    <br/>

    <div>
      <label>Password</label>
      <input {...register('password', {
        required: true, 
        minLength: { value: 6, message: "Min length atleast 6"}
      })}/>
     {errors.password && <p>{errors.password.message}</p> }
    </div>
    <br/>

    <div>
    <input
      type="submit"
      value="Submit"/>
    </div>

  </form>
  </div>
  )
}

