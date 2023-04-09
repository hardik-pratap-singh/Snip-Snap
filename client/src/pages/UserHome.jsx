import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import Post from '../components/Post/Post'
import Rightbar from '../components/RightBar/Rightbar'
import './UserHome.css'
import Navbar from '../components/Navbar/Navbar'
import ProfileLeftBar from '../components/ProfileLeftBar/ProfileLeftBar'
import { useNavigate } from 'react-router-dom'



const UserHome = () => {

  let navigate = useNavigate() ; 


  return (
    <>

    {localStorage.getItem('token') ? 
    <>
    <Navbar />
    <div className='userhome'>
      <LeftBar/>
      <Post />
      <Rightbar />
    </div> </>  
    : 
    navigate("/")
    }
     
    </>
  )
}

export default UserHome