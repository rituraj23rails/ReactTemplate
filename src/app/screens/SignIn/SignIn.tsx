import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  return (
      <div className='container'>
        <div className='formWrap'>
          <Link to='/' className='icon' >dolla</Link>
          <div className='formContent'>
            <form className='form'>
              <h1 className='formH1'>Sign In to your account</h1>
              <label className='formLabel' htmlFor='for'>Email</label>
              <input className='formInput' type='email' required />
              <label className='formLabel' htmlFor='for'>Password</label>
              <input className='formInput' type='password' required />
              <button className='formButton' type='submit'>Continue</button>
              <span className='text'>Forgot Password?</span>
            </form>
          </div>
        </div>
      </div>
  );
};

export default SignIn;
