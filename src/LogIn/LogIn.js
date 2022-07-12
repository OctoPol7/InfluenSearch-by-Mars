import React, {useRef, useState} from 'react'
import Axios from 'axios'
import { Route, Redirect } from 'react-router-dom'
// import EmailInput from './../SignUp/EmailInput.js'
// import PasswordInput from './../SignUp/PasswordInput.js'
import SubmitButton from './../SignUp/SubmitButton.js'


const LogIn = props => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loginStatus, setLoginStatus] = useState('');

    const submitHandler = (event) => {
      event.preventDefault();

      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      Axios.post(`http://localhost:4000/user/login`, user).then((res)=>{
        if (res) {
          setLoginStatus(res.data.message);
          
        } else {
          setLoginStatus("Wrong combination");
        }
        })
        .catch((error)=>setLoginStatus('Wrong combination'));
    };

    return (
      <div className="login">
        <h1>Log In</h1>
        <form onSubmit={submitHandler}>
          <label>
            Email
            <input type="email" name="email" ref={emailRef} />
          </label>
          <label>
            Password
            <input type="password" name="password" ref={passwordRef} />
          </label>
          {/* <EmailInput label="Email" name="email" />
          <PasswordInput label="Password" name="password" /> */}
          <div className="submit-button-div">
            <SubmitButton label="Log In" name="loginButton" />
          </div>
          <p>
            Not a user yet? <a href="signup">Sign Up</a>
          </p>
        </form>
        {loginStatus}
        {loginStatus === "Authentication successful" ? <Route path='/login'>
            <Redirect to='/search' />
        </Route> : <></>}
      </div>
    );
}

export default LogIn;