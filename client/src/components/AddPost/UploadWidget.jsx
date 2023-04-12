import React, { useState } from "react";
import ReactPlayer from "react-player";
import { RingLoader } from "react-spinners";

export default function App(props) {
  const [vid, setVid] = useState("");
  const [loading, setLoading] = useState(false);

  const {func} = props ; 

  

  const postDetails = (pic) => {
    if (pic === undefined) {
      alert("Not Found");
      return;
    }

    setLoading(true);
    try {
      
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "Short_video");
      data.append("cloud_name", "dcmqewoxn");

      fetch("https://api.cloudinary.com/v1_1/dcmqewoxn/video/upload", {
        method: "POST",
        body: data,

      })


        .then((res) => res.json())
        .then((data) => {
          setVid(data.url);
          func(data.url);
     
          setLoading(false)

        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  };

  return (
    // <div className="App">
      <div className="postformuploaddiv2">
      {


      //  {isLoading ? <div>Loading...</div> : null}
        
        (!vid) ?
       
        (loading)?<RingLoader color="#bc36d6" /> :  
        <input
        className="upload_widget_input_vid"
        type="file"
        accept="video/*"
        style={{ margin: "0px 0px" }}
        name="pic"
        onChange={(e) => {
          postDetails(e.target.files[0]);
        }}
      />
        :<>
        <ReactPlayer url={`${vid}`} playing={true} loop={true} className="upload_widget_react_player" playingwidth="418px" height="200px" controls={false} />
        </>
      }    

    </div>



  );
}