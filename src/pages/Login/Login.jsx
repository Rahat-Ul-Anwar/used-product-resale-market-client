import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");
    
    const handleLogin = data => {

        console.log(data);

    }
  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl font-semibold text-center">Login!</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
     
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email", {required: "Email is required"})} type="text" className="input input-bordered w-full" />
            {errors.email && <p role="alert" className="text-error">{errors.email?.message}</p>}        
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
                      <input {...register("password", {
                          required: "password is required",
                          minLength: {value:6, message: "password must be 6 character or longer"}
                      })}
                          
                          type="password" className="input input-bordered w-full" />
              {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}   
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
                      
          </div>
          
            <input type="submit" value="LOGIN" className="btn btn-primary input-bordered w-full" />
              </form>
              <p className="text-center">New to the guitar market <Link to='/register'className="text-cyan-400" >Sign Up</Link></p> 
              <div className="divider">OR</div>
              <button className="btn btn-outline font-bold input-bordered w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
