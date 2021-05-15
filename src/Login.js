import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';



function Login() {
  

  const signIn = () => {
    auth
      .signInWithPopup(provider);
      
  };

  return (
    <div className='login'>
      <div className='login_container'>
        <img
          src='https://www.gupshup.io/developer/resources/img/assets/2019/logo_type4.png'
          alt='slack logo'
        />
        <h1>GupShup</h1>
        <div>
          <p><b>Chat Endlessly</b></p>
        </div>
        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
