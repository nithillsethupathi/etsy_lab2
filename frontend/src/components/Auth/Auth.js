import React, { useState } from "react";

const Auth = () => {
  const state = null;
  const [signUp, setSignUp] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
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
                  handleChange={handleChange}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-orange-300 text-white hover:bg-orange-500 focus:outline-none my-1"
                >
                  Create Account
                </button>
              </form>
              <div class="text-grey-dark mt-6">
                Already have an account?
                <button
                  class="no-underline border-b border-blue text-blue"
                  onClick={switchMode}
                >
                  Log in
                </button>
              </div>
            </div>
          ) : (
            <div>
              <form className="bg-white shadow-md rounded p-[2%] mb-[5%]">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green bg-orange-300 text-white hover:bg-orange-500 focus:outline-none my-1"
                >
                  Login
                </button>
              </form>
              <div class="text-grey-dark mt-6">
                Do not have an Account?
                <button
                  class="no-underline border-b border-blue text-blue"
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
