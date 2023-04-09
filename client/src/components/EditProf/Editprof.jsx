import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Editprof.css"
import { useContext, useState } from "react";
import noteContext from "../../context/noteContext";


export default function Editprof() {


    let context = useContext(noteContext) ; 
    let {loggedUser} = context ; 

    const {username , email , about} = loggedUser ;
    // console.log(username);  
    const [data , setdata] = useState({ username1 : '' , email1 : "" , about1 :  "" })

    const style = {
        MarginLeft: '335px'
    };
    const navigate = useNavigate()
    const handlecancel = () =>{
        navigate('/home')
    }

    const handlechange = (e) => {
        setdata({...data , [e.target.name] : e.target.value });
      }


    return (
        <>
        <Navbar/>
        <div className="parent">
            <div className="container">
                <div className="main-body">
                    <div className="row rowedit">
                        <div className="col-md-4 col-sm-12 image_profile_edit">
                            <div className="card">
                                <div className="card-body img_card">
                                    <div className="d-flex flex-column align-items-center text-center edit_profile_image">
                                        <label>Upload New Image</label>
                                        <input type="file" id="edit_uploadimage" name="img" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* this.state.name || '' */}
                        <div className="col-md-8 col-sm-12 right_card">
                            <div className="card card_edit">
                                <div className="card-body">
                                    <div className="my_boxing_box_editprof">
                                        <div className="editprocom row mb-3">
                                            <label>Edit Username</label>
                                            <input className="edit_Profile_username" placeholder="Username" defaultValue = {username} onChange={handlechange} name="username1" />
                                        </div>
                                        <div className="editprocom row mb-3">
                                            <label>About me</label>
                                            <textarea className="edit_Profile_aboutme" placeholder="About You" defaultValue = {about}  onChange={handlechange} name="about1" />
                                        </div>
                                        <div className="editprocom row mb-3">
                                            <label>Email</label>
                                            <input className="edit_Profile_email" defaultValue = {email} placeholder="JohnDoe@bom.com" onChange={handlechange} name="email1" />
                                        </div>
                                    </div>
                                    <div className="editprocom row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary btn_div_edit" style={style}>
                                            <form action="/">
                                                <button type="button" className="btn btn-primary px-4" value="Save Changes">Update Changes</button>
                                                <button type="button" className="btn btn-primary px-4 mx-4" value="Cancel" onClick={handlecancel}>Cancel</button>
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