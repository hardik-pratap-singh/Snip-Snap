import React from 'react'
import topaccimg from '../../assets/profilepic.jpeg'
import './ProfileLeftBar.css'

const ProfileLeftBar = () => {
    return (
        <div><div className="profileviewcont">
            <div className="proacccard">
                <img src={topaccimg} alt="" />
                <div className="proaccusername">
                    <h3>aniketch</h3>
                    <p>@annny</p>
                </div>
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
        </div></div>
    )
}

export default ProfileLeftBar