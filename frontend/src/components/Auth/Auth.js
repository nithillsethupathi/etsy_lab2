import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signin, signup} from "../../actions/auth"

const initialState = {fullName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(signUp){
      dispatch(signup(formData, navigate))
    } else{
      dispatch(signin(formData, navigate))
    }
  };

  const switchMode = (e) => {
    setSignUp((prevSignUp) => !prevSignUp);
  };
  
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          {signUp ? (
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          ) : (
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          )}
          {signUp ? (
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded p-[2%] mb-[5%]"
              >
                <input
                  type="text"
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value})}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullName"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  type="password"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="password"
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value})}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-orange-300 text-white hover:bg-orange-500 focus:outline-none my-1"
                >
                  Create Account
                </button>
              </form>
              <div className="text-grey-dark mt-6">
                Already have an account?
                <button
                  className="no-underline border-b border-blue text-blue"
                  onClick={switchMode}
                >
                  Log in
                </button>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-[2%] mb-[5%]">
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green bg-orange-300 text-white hover:bg-orange-500 focus:outline-none my-1"
                >
                  Login
                </button>
              </form>
              <div className="text-grey-dark mt-6">
                Do not have an Account?
                <button
                  className="no-underline border-b border-blue text-blue"
                  onClick={switchMode}
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
