import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';


const SignUp = () => {
	const navigate = useNavigate();
	const handlelogin = () => {
		navigate('/login')
	}


	const [pic, setPic] = useState("");
	const postDetail = (pic) => {

		if (pic === undefined) {
			alert('Not Found');

			return;
		}

		if (pic.type === "image/jpeg" || pic.type === "image/png" || pic.type === "image/jpg") {
			const data = new FormData();
			data.append("file", pic);
			data.append("upload_preset", "Short_video");
			data.append("cloud_name", "dcmqewoxn")

			fetch('https://api.cloudinary.com/v1_1/dcmqewoxn/image/upload', {
				method: "POST",
				body: data
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					setPic(data.url.toString());

				})
				.catch((err) => {
					console.log(err);

				})

		}

		// else {
		// 	alert("Please select an image");
		// }
	}

	const [data, signupdata] = useState({ name: "", email: "", username: "", about: "", password: "" });

	const handleclick = async (event) => {
		event.preventDefault();

		const response = await fetch(`http://localhost:5000/api/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.name, email: data.email, username: data.username, about: data.about,
				password: data.password, profilePic: pic
			})
		});

		const json = await response.json();


		if (json.success) {
			// alert("signup Success");
			navigate("/login");
		}

		else {
			alert("failed")
		}
	}


	const handlechange = (e) => {
		// eslint-disable-next-line
		signupdata({ ...data, [e.target.name]: e.target.value });
	}


	return (
		<>
			<Navbar />
			<div className="loginmainx">
				<div className='loginconts'>
					<h2>Sign Up</h2>

					<form onSubmit={handleclick}>

						<div className='emailcont'>
							<h4>Name :</h4>
							<input type="text" value={data.name} onChange={handlechange} name="name" />
						</div>
						<div className='emailcont'>
							<h4>Username :</h4>
							<input type="text" value={data.username} onChange={handlechange} name="username" />
						</div>
						<div className='emailcont'>
							<h4>Email :</h4>
							<input type="text" name="email" value={data.email} onChange={handlechange} />
						</div>
						<div className='emailcont'>
							<h4>About :</h4>
							<textarea type="text" name="about" value={data.about} onChange={handlechange} />
						</div>
						<div className='piccont'>
							<h4>ProfilePic :</h4>
							<input type="file" accept="image/*" name="profilePic"  onChange={(e)=>{postDetail(e.target.files[0])}} />
						</div>
						<div className='passcont'>
							<h4>Password :</h4>
							<input type="password" name="password" value={data.password} onChange={handlechange} />
						</div>
						<div className='passcont'>
							<h4>Confirm Password :</h4>
							<input type="password" name="password" value={data.password} onChange={handlechange} />
						</div>
						<div className="btncont">

							<button type="submit" >Sign Up</button>
						</div>
						<div className="reguser">
							<h4 onClick={handlelogin}>Already A User? Log In</h4>
						</div>
					</form>

				</div>
			</div>
		</>
	)
}

export default SignUp