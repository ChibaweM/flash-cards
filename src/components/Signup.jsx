// src/components/SignUp.js
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white">
        <h2 className="text-center text-2xl font-bold text-olive">Sign Up</h2>
        <h4 className="text-center text-olive"> Welcome to FlashBuddy</h4>
        <form onSubmit={""} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Email address"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="sr-only">
                Password
              </label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-olive hover:bg-leather focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive"
            >
              Register
            </button>
          </div>
        </form>
        <div className="relative w-full flex justify-center">
          <p>Already have an account?</p>
          <Link to="/signin" className=" text-leather mr-4">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
