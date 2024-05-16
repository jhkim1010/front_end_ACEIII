import React, {useRef, useState, useEffect} from 'react'
// import {faCheck, faTimes, faInfoCircle}   from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../api/axios'

const USER_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,23}$/; 
const PWD_REGEX  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/; 
const REGISTER_URL = '/register'

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
    if(!v1 || !v2) {
      setErrMsg("Invalid Entry"); 
      return; 
    }

    // 데이터 베이스에 기록한다. 
    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({user, pwd}), 
                      {
                        headers : {'Content-Type' : 'application/json'}, 
                        withCredentials : true
                      }
                    );
                    console.log(response.data); 
                    console.log(response.accessToken); 
                    console.log(JSON.stringify(response)); 
                    setSuccess(true); 

                    // clear 
                    setUser(""); 
                    setPwd(""); 
    } catch(err) {
      if(!err?.response) {
        setErrMsg("No server respons"); 
      } else if (err.response?.status === 409) {
        setErrMsg("Username already Taken"); 
      } else {
        setErrMsg("Register Failed")
      }
      errRef().current.focus(); 
    }
  }

  return (

  <>
  {success? (
      <section>
        <h1>Succes!</h1>
        <a href="#">Log In</a>
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
  
           <button disabled = {!validName || !validPwd || !validPwd2 ? true : false} >
            Sign Up
           </button>
  
           <p>
            Already registerd? <br />
            <span className='line'>
              <a href="#">Sign In</a>
            </span>
           </p>
        </form>
        
  
      </section>
    )}  
  </> 
)
}

export default Register
