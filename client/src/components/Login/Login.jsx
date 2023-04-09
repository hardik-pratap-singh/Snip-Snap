import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const handlereg = () => {
    navigate('/register')
  }


  const [login , setlogin] = useState({email : "" , password : ""} ) ;  
  const handlesubmit = async (event) => {
    event.preventDefault();  //ye bhi kaafi zaroori cheez hai bhai // isko bhool gye to kaafi faltu ki errors aa sakti 
    //hai like url me teri personal cheeze show hone lag sakti hai , email , password type cheeze 

    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: login.email, password: login.password }),
    })


    const json = await response.json();
    if (json.success === true) {
      localStorage.setItem('token', json.token);
      navigate('/home')
      // alert("Succesfully loggedIn");
    }
    else {
      alert("Password Didn't Match. Try Again !")
    }
  }


  const handlechange = (e) => {
		// eslint-disable-next-line
		setlogin({ ...login, [e.target.name]: e.target.value });
	}


  return (
    <> <Navbar />

      <div className="loginmain">
        <form onSubmit={handlesubmit}>


          <div className='logincont'>
            <h2>
              Login In</h2>
            <div className='emailcont'>
              <h4>Email :</h4>
              <input type="text" value = {login.email} onChange={handlechange} name='email' />
            </div>
            <div className='passcont'>
              <h4>Password :</h4>
              <input type="password" value = {login.password} onChange={handlechange} name='password' />
            </div>
            <div className="btncont">

              <button type='submit'>Log In</button>
            </div>
            <div className="reguser">
              <h4 onClick={handlereg}>Not a user ? Register Now</h4>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Login