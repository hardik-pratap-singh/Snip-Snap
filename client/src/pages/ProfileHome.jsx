import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProfileLeftBar from '../components/ProfileLeftBar/ProfileLeftBar'
import Post from '../components/Post/Post'
import Rightbar from '../components/RightBar/Rightbar'

const ProfileHome = () => {

  

  return (<>
    <Navbar/>
    <div className='userhome'>
      <ProfileLeftBar/>
      <Post/>
      <Rightbar/>
    </div>
  </>
  )
}

export default ProfileHome