import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function App(props) {
  const [vid, setVid] = useState("");

  const {func} = props ; 

  const postDetails = (pic) => {
    if (pic === undefined) {
      alert("Not Found");
      return;
    }

    try {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "Short_video");
      data.append("cloud_name", "dcmqewoxn");

      fetch("https://api.cloudinary.com/v1_1/dcmqewoxn/video/upload", {
        method: "POST",
        body: data
      })
        .then((res) => res.json())
        .then((data) => {
          setVid(data.url);
          func(data.url);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="App">
      <div className="postformuploaddiv">
      {(!vid) ?
        <input
          type="file"
          accept="video/*"
          style={{ margin: "6px 0px" }}
          name="pic"
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        />
        :
          <ReactPlayer url={`${vid}`} playing={true} loop={true} />
        // </div>

}



    </div>
  );
}
