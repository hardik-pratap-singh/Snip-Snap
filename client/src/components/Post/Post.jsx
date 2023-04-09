import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import imgpro from '../../assets/pic.webp'

import './Post.css'
import likeimg from '../../assets/like.png'
import commentimg from '../../assets/comment.png'
import shareimg from '../../assets/share.png'
// import { useContext } from 'react'
import Comments from '../Comments/Comments'
import { useContext } from 'react'
import noteContext from '../../context/noteContext'


const Post = (props) => {

	const context = useContext(noteContext)

	const {getUserName , username} = context ; 
	const [Comment, setComment] = useState(false)

	const { video, desc, likes, comments } = props;

	// console.log(comments); 


	const commentclickhandler = () => {
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
						<ReactPlayer url={`${video}`} width={281.25} height={500} controls={true} playing={true} loop={true} style={{ backgroundColor: 'black' }} />
					</div>
					<div className="postcaption">

						<h5>
							{desc}
						</h5>
					</div>
					<div className="post-actions" >
						<div className="post-action">
							<img src={likeimg} alt="" />
							<p>{likes.length}</p>

						</div>
						<div className="post-action" onClick={commentclickhandler}>
							<img src={commentimg} alt="" />
							<p>{comments.length}</p>

						</div>
						<div className="post-action">
							<img src={shareimg} alt="" />


						</div>
					</div>

				</div>

			</div>

			
			{Comment && <div className="commentcont">

				<div className="commsdiv">
				{comments.length === 0 ? <div><h5>No Comments</h5></div>
				:
				<>
				
				<h6 className='commhead'>Comments</h6>
				{
					comments.map((x) => {
						return (<>
							{/* {getUserName(x[0].commentbyid.toString())} */}
							{/* {getUserName('64325db2061e74be70f64666')} */}
							{/* {console.log(username)} */}
							<Comments userhandle = {x[0].commentbyid} comment = {x[0].comment} /> 
						</>)
					})
				}
				</>
			}





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