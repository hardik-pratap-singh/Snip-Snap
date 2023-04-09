import React from 'react'
import Post from '../Post/Post'

const Carousel = (props) => {

    const { posts } = props

    return (
        <div style={{width:'530px'}}>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="First slide"/> */}
                        <Post vid={posts[0].video} desc={posts[0].desc} />
                    </div>
                    {posts.map((e) => {
                        return <div className="carousel-item">
                            <Post vid={e.video} desc={e.desc} />
                        </div>
                    })}

                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{filter:'invert(100)'}}></span>
                    <span className="sr-only" >Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{filter:'invert(100)'}}></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel
