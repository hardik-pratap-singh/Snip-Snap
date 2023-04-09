import React from 'react'
import './Rightbar.css'
import topaccimg from '../../assets/profilepic.jpeg'

const Rightbar = () => {
    return (
        <div className='suggacc'>
            <h3>Suggested Accounts</h3>
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
    )
}

export default Rightbar