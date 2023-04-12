import NoteContext from "./noteContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const NoteState = (props) => {

    const [loggedUser, setloggedUser] = useState({});

    const [userposts , setuserposts] = useState([]) ; 
    const [username , setusername ]  = useState('') ; 

    useEffect(() => {

        localStorage.getItem('token') && getDetails();
        localStorage.getItem('token') && getMyPosts(); 
    });


    

    const getUserName = async (id) => {
    
        const response = await fetch("http://localhost:5000/api/auth/gettheusername/" + `${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        setusername(json.username);
    }

    //ye chal rha hai 
    // console.log(getUserName('6431b898a1cde6164f5369a4')); 
    // console.log(username) ; 

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
    <NoteContext.Provider value={{ loggedUser  , userposts , getUserName , username }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;


