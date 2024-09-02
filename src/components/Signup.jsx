// src/components/SignUp.js
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const userRef = useRef();
  const errRef = useRef();

  //to capture the details from the form
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [conPwd, setConPwd] = useState("");
  const [validConPwd, setValidConPwd] = useState(false);
  const [conPwdFocus, setConPwdFocus] = useState(false);

  //part to help with error messages
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


 /*  //helpers to capture the data from the form
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(USER_REGEX.test(email));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidConPwd(pwd === conPwd);
  }, [pwd, conPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd, conPwd]); */

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white">
        <h2 className="text-center text-2xl font-bold text-olive">
          welcome to studybuddy
        </h2>
        <h4 className="text-center text-olive"> sign up</h4>
        <form onSubmit={""} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                username
              </label>
              <input
                id="username"
                name="username"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                passwords
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="password"
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="sr-only">
                confirm password
              </label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-olive hover:bg-leather focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive"
            >
              register
            </button>
          </div>
        </form>
        <div className="relative w-full flex justify-center">
          <p>
            <Link to="/signin" className=" text-leather mr-4">
              sign in with existing account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
