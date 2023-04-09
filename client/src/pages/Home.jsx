import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './Home.css'
import gifdance from '../assets/homedance.gif'
import Navbar from '../components/Navbar/Navbar'


const Home = () => {

    

    return (
        <> <Navbar/>
        <div className='homevid'>
            <div className='reactplayerpost'>
                <ReactPlayer url='https://www.youtube.com/shorts/FmEutqoWA3o' width={281.25} height={500} />
            </div>
            <div className="gifdesc">
                <h1>
                Discover a world of entertainment in just a few swipes! Welcome to the world of SnipSnap
                </h1>
                <img src={gifdance} alt="loading..." />

            </div>
            <div className='reactplayerpost'>
                <ReactPlayer url='https://www.youtube.com/shorts/FmEutqoWA3o' width={281.25} height={500} />
            </div>
        
        </div>
        </>
    )
}

export default Home