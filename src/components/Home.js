import React from 'react'
import "../styles/Home.css"
import secondImg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
function Home() {
    return (
      <>
            <div className='Home-page-container'>
                <main>
                <h1 className='Homepage-heading'>
                    TechyStar
                </h1>
                <p className='Homepage-sub-heading'>
                  solution for all your problem
                    </p>
                    </main>
                
        </div>
        <div className="home-page-second-container">
          
            <img src={secondImg} alt="" className='homepage-second-container-img'/>
            <p>we are your one and only solution to the tech problems you face every day we are leading tech company whose aim is to ioncrease the 
              problem solving ability in children
            </p>
          
        </div>
        <div className="homepage-third-container"  id='about'>
          <div className="who-container">
          <h2>Who we are ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non asperiores ipsa facere temporibus odit illum, nobis nesciunt soluta, eaque veritatis beatae, quisquam aliquam dolore quae sed ducimus? Commodi, fuga et?</p>
        </div>
        </div>
        <div className="home-page-fourth-container" id='brands'>
          <div className="brand-details">
            <h2>Brand</h2>
            <div className="brand-icons">
              <div className="google-icon">
                <AiFillGoogleCircle  />
                <p>Google</p>
              </div>    
              <div className="amazon-icon">
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
              <div className="youtube-icon">
                <AiFillYoutube />
                <p>Youtube</p>
              </div>
              <div className="instagram-icon">
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default Home
