import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('result --> ', result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
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
