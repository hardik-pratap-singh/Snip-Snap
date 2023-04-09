import React, { useState } from 'react'
import './Navbar.css'
import pic from '../../assets/pic.webp'
import upload from '../../assets/upload.png'
import headimg from '../../assets/headimg.png'
import logoutpic from '../../assets/logout.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import noteContext from '../../context/noteContext'


const Navbar = () => {
    let context = useContext(noteContext) ; 

    const {loggedUser} = context ; 
    const profilePic = loggedUser.profilePic ; 
    const [isLoggedin, setIsLoggedin] = useState(false)
    const navigate = useNavigate()
    const handlelogin = () => {
        navigate('/login')
    }
    const handlesignup = () => {
        navigate('/register')
    }

    const handleupload = () => {
        navigate('/upload')
    }
    const handleprofile = () => {
        navigate('/ownprofile')
    }
    const handlelogout = () =>{
        localStorage.removeItem('token') ; 
        navigate('/') 
    }



    return (


        <div className="navbar">

            <div className="headimgname">

                <div>
                    <img className='headimg' src={headimg}></img>
                </div>
                <div>

                    <h1 className='headname'>SnipSnap</h1>
                </div>
            </div>

            <div className="navlinks">
                {localStorage.getItem('token') ?
                    <>
                        <div className='uploadbtn' onClick={handleupload}><img src={upload} alt="" /></div>
                        <div className='profilepic' onClick={handleprofile}><img src={localStorage.getItem('token') ? `${profilePic}`  : `${pic}`} alt="" /></div>
                        <div className='logoutpic' onClick={handlelogout}><img src={logoutpic} alt="" /></div>
                    </>
                    : <div>
                        <button className='regbtn' onClick={handlelogin}>Login</button>
                        <button className='regbtn' onClick={handlesignup}>Register</button>
                        </div>
                }
            </div>



        </div>
    )
}

export default Navbar