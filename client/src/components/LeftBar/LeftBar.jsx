import React from 'react'
import './LeftBar.css'
import homeicon from '../../assets/home.png'
import followingimg from '../../assets/following.png'
import topaccimg from '../../assets/profilepic.jpeg'


const LeftBar = () => {
  return (
    <div>
    <div className='homefollow'>
        <div className="homeicon">
                <img src={homeicon} alt="" />
                <h3>Explore</h3>
        </div>
        <div className="followingk">
            <img src={followingimg} alt="" />
            <h3>Following</h3>

        </div>

        <hr />
        
    </div>
<div className="topaccrender">
    <h3 className='topacchead'>Top Accounts</h3>

    <div className="topacccard">
        <img src={topaccimg} alt="" />
        <div className="topaccusername">
            <h3>aniketch</h3>
            <p>@annny</p>
        </div>
    </div>
    <div className="topacccard">
        <img src={topaccimg} alt="" />
        <div className="topaccusername">
            <h3>aniketch</h3>
            <p>@annny</p>
        </div>
    </div>
    <div className="topacccard">
        <img src={topaccimg} alt="" />
        <div className="topaccusername">
            <h3>aniketch</h3>
            <p>@annny</p>
        </div>
    </div>


</div>
    
    </div>
  )
}

export default LeftBar