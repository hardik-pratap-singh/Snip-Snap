import NoteContext from "./noteContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const NoteState = (props) => {

    const [loggedUser, setloggedUser] = useState({});

    const [userposts , setuserposts] = useState([]) ; 

    useEffect(() => {
        localStorage.getItem('token') && getDetails();
        localStorage.getItem('token') && getMyPosts(); 
    });

    const getDetails = async () => {
        const response = await fetch("http://localhost:5000/api/user/getmyinfo", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        });

        const json = await response.json();
        setloggedUser(json.user);
    }


    const getMyPosts = async() => {
        const response = await fetch('http://localhost:5000/api/posts/getallposts', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }) ;

        const json = await response.json() ;
        // console.log(json.posts) ; 
        setuserposts(json.posts);
    }



return (
    // <NoteContext.Provider value={{ s1, notes, addNote, deleteNote, editNote , getNotes }}>
    <NoteContext.Provider value={{ loggedUser  , userposts }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;


