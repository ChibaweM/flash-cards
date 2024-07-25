// src/components/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg ">
        <h2 className="text-center text-2xl font-bold text-olive">Welcome to FlashBuddy</h2>
        <h6 className="text-center text-leather">Sign In</h6>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Password" />
            </div>
          </div>

          <div>
            <button type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-olive hover:bg-leather focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive">
              Sign In
            </button>
          </div>
        </form>
        <div className="relative w-full flex justify-center">
          <p>Dont have an account?</p>
          <Link to="/signup" className=" text-leather mr-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
