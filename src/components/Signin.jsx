// src/components/SignIn.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState();
  const [conPassword, setconPassword] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg ">
        <h2 className="text-center text-2xl font-bold text-olive">
          Welcome to Studybuddy
        </h2>
        <h6 className="text-center text-leather">Sign In</h6>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="test"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-olive hover:bg-leather focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="relative w-full flex justify-center">
          <p>
          <Link to="/signup" className=" text-leather mr-4">
            Register Account
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
