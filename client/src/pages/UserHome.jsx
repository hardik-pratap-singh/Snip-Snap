import React, { useState, useEffect } from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import Post from '../components/Post/Post'
import Rightbar from '../components/RightBar/Rightbar'
import './UserHome.css'
import Navbar from '../components/Navbar/Navbar'
import ProfileLeftBar from '../components/ProfileLeftBar/ProfileLeftBar'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'



const UserHome = () => {

  let navigate = useNavigate();


  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchAllPosts();
  })


  const fetchAllPosts = async () => {

    const response = await fetch(`http://localhost:5000/api/posts/getallposts`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },

    })


    const json = await response.json();
    if (json.success) {
      
        setPosts(json.posts);
        // console.log(posts)
      }
    

  }



  return (
    <>

      {localStorage.getItem('token') ?
        <>
          <Navbar />
          <div className='userhome'>
            <LeftBar />
            {/* {posts.map((e)=>{
              return <div><Post vid={e.video} desc={e.desc}/></div>
            })} */}
            {(posts.length > 0)?<Carousel posts={posts}/>:<div>wait</div>}
            
            
            <Rightbar />
          </div> </>
        :
        navigate("/")
      }

    </>
  )
}

export default UserHome