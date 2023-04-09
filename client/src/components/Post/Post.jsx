import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import imgpro from '../../assets/pic.webp'

import './Post.css'
import likeimg from '../../assets/like.png'
import commentimg from '../../assets/comment.png'
import shareimg from '../../assets/share.png'


const Post = (props) => {
  const [Comment , setComment] = useState(false)
  const commentclickhandler = () =>{
    setComment(!Comment)
  }
  return (
    <div className="postcardcont">

      <div className='postcard'>
        <div className="profilepicpost">
          <img src={imgpro} alt="" />
        </div>
        <div className="post-content">
          <div className="post-owner-info">
            <div>
              <h3><b>aniketch</b></h3>
            </div>
            <div className='postcardusername'>
              <h3><i>@annyy</i></h3>
            </div>
            <div>
              <p>45th March</p>
            </div>
          </div>
          <div className='reactplayerpost'>

            <ReactPlayer url={`${props.vid}`} width={281.25} height={500} controls={true} playing={true} loop={true} style={{backgroundColor:'black'}}/>
          </div>
          <div className="postcaption">

            <h5>
              {props.desc}
            </h5>
          </div>
          <div className="post-actions" >
            <div className="post-action">
              <img src={likeimg} alt="" />
              <p>100</p>

            </div>
            <div className="post-action" onClick={commentclickhandler}>
              <img src={commentimg} alt="" />
              <p>12</p>

            </div>
            <div className="post-action">
              <img src={shareimg} alt="" />


            </div>
          </div>

        </div>

      </div>

     
       {Comment && <div className="commentcont">
          <h6 className='commhead'>Comments</h6>
          <div className="commsdiv">

            <div className="comment">
              <div className="commentprofilepic">
                <img src={imgpro} alt="" />
                <h6>Aniketch</h6>
              </div>
              <div className="commentcontent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              </div>
            </div>

            <div className="comment">
              <div className="commentprofilepic">
                <img src={imgpro} alt="" />
                <h6>Aniketch</h6>
              </div>
              <div className="commentcontent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              </div>
            </div>

            <div className="comment">
              <div className="commentprofilepic">
                <img src={imgpro} alt="" />
                <h6>Aniketch</h6>
              </div>
              <div className="commentcontent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              </div>
            </div>

            <div className="commententer">
              <div className="entercommenthead"><h6>Enter Your Comment</h6></div>
              <div className="entercomment">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="commbtn">Comment</div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Post