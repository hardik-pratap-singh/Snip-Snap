import React from 'react'
import imgpro from '../../assets/pic.webp'
import { useContext } from 'react'
import noteContext from '../../context/noteContext'

const Comments = (props) => {

  let context = useContext(noteContext)

	let {getUserName , username} = context ; 

    const {userhandle , comment} = props ; 

    getUserName(userhandle.toString()) ; 
    // console.log(username) ; 
  return (
    <div>
      <div className="comment">
              <div className="commentprofilepic">
                <img src={imgpro} alt="" />
                <h6>{username}</h6>
              </div>
              <div className="commentcontent">
                <p>{comment}</p>
              </div>
            </div>
    </div>
  )
}

export default Comments
