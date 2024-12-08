import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './MyServices.css'

const MyServices = () => {
  return (
    <div>
      <div className='services' id='services'>
        <div className='container'>
          <h1 className='sub-title'>My <span>Services</span></h1>
          <div className='services-list'>
            <div>
              <i className='bx bx-code' style={{ color: '#00eeff' }}></i>
              <h2>Frontend developement</h2>
              <p>
                I specialize in front-end development, creating responsive and visually engaging user interfaces
                 using HTML, CSS, JavaScript, and ReactJS. My focus is on delivering high-quality designs that 
                 enhance user experience and engagement.
              </p>
              <a href='#' className='read'>Learn More</a>
            </div>

            <div>
              <i className='bx bx-crop' style={{ color: '#00eeff' }}></i>
              <h2>Backend developement</h2>
              <p>

                I specialize in back-end development, building robust and efficient server-side applications to 
                support seamless functionality. With expertise in databases, server management, and programming 
                languages like Java and SQL, I ensure secure, scalable, and reliable systems for optimal performance.
              </p>
              <a href='#' className='read'>Learn More</a>
            </div>

            <div>
              <i className='bx bxl-apple' style={{ color: '#00eeff' }}></i>
              <h2>Full Stack developement</h2>
              <p>
                I specialize in full-stack development, seamlessly integrating front-end interfaces with robust 
                back-end systems. With expertise in HTML, CSS, JavaScript, ReactJS, Java, and SQL, I create 
                responsive, secure, and scalable applications that deliver a complete and efficient user experience.
              </p>
              <a href='#' className='read'>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyServices
