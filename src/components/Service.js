import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
 
function Service() {
  return (
      <>
          <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} >
              <div>
                  <img src={img3} alt="" />
                  <p className='legend'>Full stack development</p>
                  
              </div>
              <div>
                  <img src={img4} alt="" />
                  <p className='legend'>All type of services</p>
              </div>
          </Carousel>
      </>
  )
}

export default Service
