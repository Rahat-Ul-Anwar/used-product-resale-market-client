import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl font-semibold text-center">Login!</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
     
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email")} type="email" className="input input-bordered w-full" />
                      
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
                      <input {...register("password")} type="password" className="input input-bordered w-full" />
                      <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
                      
          </div>
          
            <input value="LOGIN" className="btn btn-primary input-bordered w-full" />
              </form>
              <p>New to the guitar market <Link to='/register'>Sign Up</Link></p> 
              <div className="divider">OR</div>
      </div>
    </div>
  );
};

export default Login;
