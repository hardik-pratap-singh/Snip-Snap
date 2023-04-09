import React, { useState } from 'react'
import topaccimg from '../../assets/profilepic.jpeg'
import './ProfileLeftBar.css'

const ProfileLeftBar = () => {
    const [follow, setfollow] = useState(false)
    const handlefollow = () => {
        setfollow(true)
    }
    const handleunfollow = () => {
        setfollow(false)
    }

    
    return (
        <div><div className="profileviewcont">
            <div className="proacccard">
                <img src={topaccimg} alt="" />
                <div className="proaccusername">
                    <h3>aniketch</h3>
                    <p>@annny</p>
                </div>
            </div>
            <div className="proaccbio">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam, tenetur nesciunt praesentium laboriosam ea ipsam culpa maiores rerum quae.</h6>
            </div>

            <div className="proaccstats">
                <div className="proaccstat">
                    <h3>100</h3>
                    <p>Following</p>
                </div>
                <div className="proaccstat">
                    <h3>100</h3>
                    <p>Followers</p>
                </div>

            </div>

            <div className="follunfoll">
                {!follow ?
                    <button className="followbtn" onClick={handlefollow}>Follow</button> :
                    <button className="followingbtn" onClick={handleunfollow}>Following</button>
                    }

            </div>


        </div></div>
    )
}

export default ProfileLeftBar