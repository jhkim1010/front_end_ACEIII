import React, { useEffect, useState , useRef , useContext} from 'react'
import './Login.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'; 
import userContext  from '../store/useUserState';

// const LOGIN_URL = '/auth'; 

function Login() {  
//   const {setAuth} = useAuth(); 
  const USER_REGEX = /^[a-z0-9._-]+@[a-z0-9-]{3,23}$/; 

  const navigate = useNavigate(); 
  // const location = useLocation(); 
  // const from = location.state?.from?.pathname || "/"; 
  const userRef = useRef(); 
  const errRef  = useRef(); 

  const uctx = useContext(userContext);
  // console.log(`login user context : `); 
  // console.log(uctx.user); 

  const [user, setUser] = useState(''); 
  const [pwd, setPwd] = useState(''); 
  const [errMsg, setErrMsg] = useState(''); 
  const [validName, setValidName] = useState(false); 
//   const [success, setSuccess] = useState(false); 


  useEffect(()=>{
    userRef.current.focus(); 
  }, [])
  
  useEffect(() => {
    const result = USER_REGEX.test(user); 
    console.log(result); 
    console.log(user); 
    setValidName(result); 
  }, [user])


  useEffect(() => {
    setErrMsg(''); 
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
          method: "POST", 
          credentials: "include", 
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify({username : user, pwd : pwd}) 
      });

      // console.log(response.ok);

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // console.table(data);

      // // JWT 토큰을 로컬 스토리지에 저장
      // localStorage.setItem('token', data.token); 
      uctx.setUser({username : data.username, userID : data.userID, companyID : data.companyID}); 
      // console.log('After LoggedIn :'); 
      // console.log(uctx.user); 

      localStorage.setItem('msg_for_client', data.msg_for_client); 

      navigate("/");
      // 사용자를 원래 페이지로 리디렉션
      // setErrMsg("Success Login"); 
      // // navigate(from, { replace: true });


      // // 폼 초기화
      // setUser(""); 
      // setPwd(""); 
    } catch (err) {
        console.error(err);
        setErrMsg('Login failed. Please try again.');
    }
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
            onChange={(e) => setPwd(e.target.value)}
            autoComplete='off'
            value = {pwd}
            required
            />
            <button disabled={!validName}>Sign In</button>
        </form>
        <p>
            Need an Account? <br />
            <span className='line'>
            <Link to="/register">Sign Up</Link>
            </span>
        </p>
    </section> 
        )
  
}

export default Login