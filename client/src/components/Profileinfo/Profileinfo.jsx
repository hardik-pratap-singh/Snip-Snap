import "./Profileinfo.css"
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import pic from '../../assets/pic.webp'

import { useContext } from "react";
import noteContext from "../../context/noteContext";
export default function Profilef(){

    let context = useContext(noteContext) ; 
    let {loggedUser} = context ; 

 
    const {name , username , email , about , followers , following , profilePic  } = loggedUser ; 




    // console.log(loggedUser) ; 

    let navigate = useNavigate()  ; 

    
    const style ={
        MarginLeft: '335px'
      };

      const handleClick = () => {
        navigate("/editprofile") ; 
      }
    

      return (

        <>

        <Navbar />

        <div className="parent">
            

        <div className="container">
                <div className="main-body">
                    <div className="row both_card">
                        <div className="col-lg-4 image_profile">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={localStorage.getItem('token') ? `${profilePic}` : pic} alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                                        <div className="mt-3">
                                            <h4>{name}</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card card2">
                                <div className="card-body">
        
        
                                    <div className="my_boxing_box">
        
                                        <div className="row mb-3">
                                            <label>Username</label>
                                            <h4 className="Profile_info">{username}</h4>
                                        </div>
            
                                        <div className="row mb-3">
                                            <label>About me</label>
                                            <h4 className="Profile_info">{about}</h4>
                                        </div>
            
                                        <div className="row mb-3">
                                            <label>Email</label>
                                            <h4 className="Profile_info">{email}</h4>
                                        </div>
            
            
                                        {/* <div className="row mb-3">
                                            <label>Followers</label>
                                            <h4 className="Profile_info">{followers.length}</h4>
                                        </div>
            
                                        <div className="row mb-3">
                                            <label>Following</label>
                                            <h4 className="Profile_info">{following.length}</h4>
                                        </div> */}
        
                                    </div>	
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary" style={style}>
                                            <form action="/">
                                                <button type="button" className="btn btn-primary px-4" value="Save Changes" onClick={handleClick}>Edit Profile</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
              </div>


              </>

      );
    

}