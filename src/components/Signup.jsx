// src/components/SignUp.js
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";


const Register_URL = '/users/auth/signup';


function Signup() {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  //to capture the details from the form
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [conPwd, setConPwd] = useState("");
  const [validConPwd, setValidConPwd] = useState(false);
  const [conPwdFocus, setConPwdFocus] = useState(false);

  //part to help with error messages
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, conPwd]);

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
  }, [pwd, conPwd]);*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        Register_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      if(resp.status==200){
        navigate("/signin");
      }
    } catch (err) {
      if (!err?.resp) {
        setErrMsg("No server response");
        console.log("No server response");
      } else {
        setErrMsg("Idk what error you got bro");
        console.log("");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
          {errMsg}
        </p>
        <h2 className="text-center text-2xl font-bold text-olive">
          Welcome to Studybuddy
        </h2>
        <h4 className="text-center text-olive"> Sign Up</h4>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                username
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                name="username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </div>
            <div>
              <label htmlFor="conPwd" className="sr-only">
                conPwd
              </label>
              <input
                id="conPwd"
                name="conPwd"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-olive focus:border-olive focus:z-10 sm:text-sm"
                placeholder="Confirm password"
                onChange={(e) => setConPwd(e.target.value)}
                onFocus={() => setConPwdFocus(true)}
                onBlur={() => setConPwd(false)}
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
