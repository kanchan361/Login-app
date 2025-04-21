import React, { useState } from 'react'

export default function AuthForm() {
  const[islogin, setIsLogin] = useState(false);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={islogin ? 'active' : ''} onClick={() => setIsLogin
            (true)}>Login</button>
          <button className={!islogin ? 'active' : ''}onClick={() => setIsLogin
            (false)}>SignUp</button>
        </div>
        {islogin ? <> 
        <div className='form'>
          <h2>Login Form</h2> 
          <input type='usename' placeholder='Username'/>
          <input type='password' placeholder='Password'/>
          <a href='#'>Forgot Password</a>
          <button>Login</button>
          <p>Not a Member?<a href='#' onClick={()=>setIsLogin (false)}>SignUp</a></p>
          </div> 
          </> : <>
          <div className='form'>
          <h2>SignUp Form</h2> 
          <input type='usename' placeholder='Username'/>
          <input type='password' placeholder='Password'/>
          <input type='password' placeholder='Conform Password'/>
          <button>SignUp</button>

          </div>
          </>}
      </div>
    </div>
  )
}
