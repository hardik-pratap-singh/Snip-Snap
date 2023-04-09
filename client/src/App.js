
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';
import SignUp from './components/SignUp/SignUp';

import Home from './pages/Home';

import UserHome from './pages/UserHome';
import Login from './components/Login/Login';
import ProfileHome from './pages/ProfileHome';
import Postform from './components/AddPost/Postform';
import Editprof from './components/EditProf/Editprof';
import Profileinfo from './components/Profileinfo/Profileinfo';
// import Editprof from './components/EditProf/Editprof';
import NoteState from './context/noteState';




function App() {
  return (
    <>
      <NoteState>
        <Router>

          <Routes>

            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<SignUp />}></Route>
            <Route path="/profile" element={<ProfileHome />}></Route>
            <Route path="/home" element={<UserHome />}></Route>
            <Route path="/upload" element={<Postform />}></Route>
            <Route path="/ownprofile" element={<Profileinfo />}></Route>
            <Route path="/editprofile" element={<Editprof />}></Route>



          </Routes>
        </Router>
      </NoteState>



    </>

  );
}

export default App;
