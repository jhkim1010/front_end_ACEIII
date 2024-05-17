import React, {useRef, useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
// import {faCheck, faTimes, faInfoCircle}   from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
// import { Co2Sharp } from '@mui/icons-material';
// import axios from '../api/axios' 

const USER_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]{3,23}$/; 
const PWD_REGEX  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/; 
// const REGISTER_URL = '/register'

function Register() {
  const userRef = useRef(); 
  const errRef  = useRef(); 

  const [user, setUser] = useState(''); 
  const [validName, setValidName] = useState(false); 
  const [userFocus, setUserFocus ] = useState(false); 

  const [pwd, setPwd] = useState(''); 
  const [validPwd, setValidPwd]  = useState(false); 
  const [pwdFocus, setPwdFocus ] = useState(false); 

  const [pwd2, setPwd2] = useState(''); 
  const [validPwd2, setValidPwd2]  = useState(false); 
  const [pwdFocus2, setPwdFocus2 ] = useState(false); 

  const [errMsg, setErrMsg] = useState(''); 
  const [success, setSuccess] = useState(false); 

  useEffect(() => {
    userRef.current.focus(); 
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user); 
    console.log(result); 
    console.log(user); 
    setValidName(result); 
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd); 
    console.log(result); 
    console.log(pwd); 
    setValidPwd(result); 
    const match = pwd === pwd2; 
    setValidPwd2(match)
    // setValidPwd(result); 
  }, [pwd, pwd2])

  useEffect(() => {
    setErrMsg(''); 
  }, [user, pwd, pwd2])

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const v1 = USER_REGEX.test(user); 
    const v2 = PWD_REGEX.test(pwd); 
    console.log("Username valid:", v1, "Password valid:", v2);

    if(!v1 || !v2) {
      console.log("Invalid Entry"); 
      setErrMsg("Invalid Entry"); 
      return; 
    }

    console.log(JSON.stringify({user, pwd})); 

    try {
      console.log("try to send"); 
      const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST", 
        credentials: "include", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          username : user, 
          pwd : pwd
        }) 
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.table(data); 
      setSuccess(true); 
  
      setUser(""); 
      setPwd(""); 
    } catch (err) {
      console.error(err);
      setErrMsg("Failed to register");
    }
    // // 데이터 베이스에 기록한다. 
    // await fetch("http://localhost:4000/auth/register",  
    //   {
    //     method: "POST", 
    //     credentials : "include", 
    //     headers : {'Content-Type' : 'application/json'}, 
    //     body : JSON.stringify({user, pwd}) 
    //   }).catch(err => {
    //     console.error(err)
    //   }).then(res => {
    //     if(!res || !res.ok || res.status >= 400) {return;}
    //     else return res.json(); 
  
    //   }).then(data => {
    //     if(!data) return; 
    //     console.table(data); 
    //     setSuccess(true); 

    //     // clear 
    //     setUser(""); 
    //     setPwd(""); 
    //   });
    }

  return (

  <>
  {success? (
      <section>
        <h1>Succes!</h1>
        <Link to = "/">Log In</Link>
      </section>
      ): (
      <section>
        <p ref = {errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p> 
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">
            UserName :
            <span className={validName? "valid": "hide"}>
              <CheckIcon/>
            </span> 
            <span className={validName || !user ? "hide" : "invalid"}>
              <CloseIcon />
            </span>
          </label>
          <input 
            type="text" 
            id='username'
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid = {validName? "false": "true"}
            aria-describedby='uidnote'
            onFocus={() =>  setUserFocus(true  )}
            onBlur={() =>   setUserFocus(false )}
            placeholder='Enter UserName'
          />
          <p id = "uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <InfoIcon/>         <br /> 
            4 to 24 caracters. <br />
            Must begin with a letter <br />
            Letters, numbers, undescores, hyphens allowed
           </p> 
  
           <label htmlFor="password">
            Password :
            <span className={validPwd? "valid": "hide"}>
              <CheckIcon/>
            </span> 
            <span className={validPwd || !pwd ? "hide" : "invalid"}>
              <CloseIcon />
            </span>
          </label>
          <input 
            type="password" 
            id='password1'
            // ref={}
            autoComplete='off'
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid = {validName? "false": "true"}
            aria-describedby='pwdnote'
            onFocus={() =>  setPwdFocus(true  )}
            onBlur={() =>   setPwdFocus(false )}
            // placeholder='Enter Password1'
          />
          <p id = "pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
            <InfoIcon/>         <br /> 
            9 to 24 caracters. <br />
            Must include uppercase and lowercase letter and a numbre<br />
            a number and a special character <br />
            Allowed character : <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span>
           </p> 
  
  
           <label htmlFor="confirm_pwd">
            Password Confirm :
            <span className={validPwd2 && pwd2? "valid": "hide"}>
              <CheckIcon/>
            </span> 
            <span className={validPwd2 || !pwd2 ? "hide" : "invalid"}>
              <CloseIcon />
            </span>
          </label>
          <input 
            type="password" 
            id='password2'
            // ref={}
            autoComplete='off'
            onChange={(e) => setPwd2(e.target.value)}
            required
            aria-invalid = {validName? "false": "true"}
            aria-describedby='confirm_note'
            onFocus={() =>  setPwdFocus2(true  )}
            onBlur={() =>   setPwdFocus2(false )}
            // placeholder='Enter Password1'
          />
          <p id = "confirm_note" className={pwdFocus2 && pwd2 && !validPwd2 ? "instructions" : "offscreen"}>
            <InfoIcon/>         <br /> 
            Not matched yet <br />
           </p> 
  
           <button disabled = {!validName || !validPwd || !validPwd2 ? true : false} onClick={handleSubmit}>
            Sign Up
           </button>
  
           <p>
            Already registerd? <br />
            <span className='line'>
              <Link to="/">Sign In</Link>
            </span>
           </p>
        </form>
        
  
      </section>
    )}  
  </> 
)
}

export default Register
