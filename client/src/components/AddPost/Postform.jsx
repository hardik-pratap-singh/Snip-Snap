// import { useEffect, useRef } from "react";
import UploadWidget from "./UploadWidget";
// import ReactPlayer from "react-player";
import "./Postform.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Postform() {
  const navigate = useNavigate()
  const handlecancel  = () =>{
    navigate('/home')
  }

  const [data   , setdata] = useState("")
  const [vid , setvid] = useState("") ; 

  const func = (e) => {
    setvid(e);
  }

  const handlechange = (e) => {
    setdata(e.target.value);
  }


  const handleSubmit = async (e) =>{
    e.preventDefault() ; 
    const response = await fetch(`http://localhost:5000/api/posts/addpost`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },
      
      body: JSON.stringify({ video: vid , desc : data  }),
    })


    const json = await response.json();
    if(json.success){
      navigate("/home") ; 
    }


  }


  return (
    <><Navbar/>
    <div className="parent">
      <div className="main_boxing_box">
        <form action="/" method="/">
          <div className="postformuploaddiv">
            <div className="postformuploadlabel">
              <h4>Upload Your Snap</h4>
            </div>
            <div className="postformuploadbtn">
              <UploadWidget func = {func} />
            </div>
          </div>


          <div className="postformcaptiondiv">
            <div className="postformcaptionlabel">
              <div className="h4">Caption</div>
            </div>
            <div className="postformcaptioninput">
              <textarea
                onChange={handlechange}
                value = {data}
                name="postformcaption_input"
                placeholder="Enter your Caption"
                ></textarea>
            </div>

            {/* <div className="postform_tagdiv">

            <div className="postformtaglabel">
              <div className="h4">Tags</div>
            </div>
            

            <div className="postform_taginput">
            <input name="postform_taginp" placeholder="Enter you tags" />
            </div>
            
            
          </div> */}


            <div className="postform_buttondiv">
          <button className="postform_cancelbtn" onClick={handlecancel}>Cancel</button>
          <button className="postform_postbtn" onClick={handleSubmit}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
          </>
  );
}

// export default UploadWidget;
