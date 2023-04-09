// import { useEffect, useRef } from "react";

// const UploadWidget = () => {
//   const cloudinaryRef = useRef();
//   const WidgetRef = useRef();
//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     WidgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dsowfsgld",
//         uploadPreset: "mkgv6ayn"
//       },
//       function (error, result) {}
//     );
//   }, []);

//   return <button onClick={() => WidgetRef.current.open()}>Upload Video</button>;
// };

// export default UploadWidget;

// import { useEffect, useRef } from "react";

// const UploadWidget = () => {
//   const cloudinaryRef = useRef();
//   const WidgetRef = useRef();
//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     WidgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dsowfsgld",
//         uploadPreset: "mkgv6ayn"
//       },
//       function (error, result) {}
//     );
//   }, []);

//   return <button onClick={() => WidgetRef.current.open()}>Upload Video</button>;
// };

// export default UploadWidget;

// import React, { useState } from "react";
// import ReactPlayer from "react-player";

// export default function App(props) {
//   const [vid, setVid] = useState("");

//   const {func} = props ; 

//   const postDetails = (pic) => {
//     if (pic === undefined) {
//       alert("Not Found");

//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("file", pic);
//       data.append("upload_preset", "Short_video");
//       data.append("cloud_name", "dcmqewoxn");

//       fetch("https://api.cloudinary.com/v1_1/dcmqewoxn/video/upload", {
//         method: "POST",
//         body: data
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setVid(data.url);
//           func(data.url);
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     // <div className="App">
//       <div className="postformuploaddiv">
//       {(!vid) ?
//         <input
//           type="file"
//           accept="video/*"
//           style={{ margin: "6px 0px" }}
//           name="pic"
//           onChange={(e) => {
//             postDetails(e.target.files[0]);
//           }}
//         />
//         :
//           <ReactPlayer url={`${vid}`} playing={true} loop={true} />
//         // </div>

// }



//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
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
          console.log(data);
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