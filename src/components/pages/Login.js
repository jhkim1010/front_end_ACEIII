import React, { useEffect, useState , useRef } from 'react'
// import useAuth from '../hooks/useAuth';
// import axios from '../api/axios'
import './Login.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'; 


// const LOGIN_URL = '/auth'; 

function Login() {  
//   const {setAuth} = useAuth(); 
  const USER_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,23}$/; 

  const navigate = useNavigate(); 
  const location = useLocation(); 
  const from = location.state?.from?.pathname || "/"; 
  const userRef = useRef(); 
  const errRef  = useRef(); 

  const [user, setUser] = useState(''); 
  const [pwd, setPwd] = useState(''); 
  const [errMsg, setErrMsg] = useState(''); 
//   const [success, setSuccess] = useState(false); 
  
  useEffect(()=>{
    userRef.current.focus(); 
  }, [])

  useEffect(() => {
    setErrMsg(''); 
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.priventDefault(); 
    // try {
        // const response = await fetch.post(LOGIN_URL, 
    //         JSON.stringify({user, pwd}), 
    //         {
    //             headers : {'Content-Type' : 'application/json'}, 
    //             withCredentials : true 
    //         })
    //     console.log(JSON.stringify(response?.data))
    //     const accessToken = response?.data?.accessToken; 
    //     const roles = response?.data?.roles; 
    //     // setAuth({user, pwd, roles, accessToken})
    //     setUser(''); 
    //     setPwd(''); 
    //     // setSuccess(true); 
    //     navigate(from, {replace : true }); 

    // } catch (err) {
    //     if(!err?.response) {
    //         setErrMsg("No Server response")
    //     } else if (err.response?.status === 400) {
    //         setErrMsg("Missing Username or Password")
    //     } else if (err.response?.status === 401) {
    //         setErrMsg("Unautherized")
    //     } else {
    //         setErrMsg("Login Failed")
    //     }
    //     errRef.current.focus(); 
    // }
  }

  return (
        <section>
            <p ref= {errRef} className={errMsg? "errmsg": "offscreen"} aria-live='assertive'>
                {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
                <input 
                type="text" 
                id="username" 
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value = {user}
                required
                />
                <label htmlFor="password">Password : </label>
                <input 
                type="password" 
                id="password" 
                ref={errRef}
                autoComplete='off'
                value = {pwd}
                required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account? <br />
                <span className='line'>
                    <a href="#"> Sign Up</a>
                </span>
            </p>
        </section> 
        )
  
}

export default Login