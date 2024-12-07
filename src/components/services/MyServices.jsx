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
            <h2>UI/UX Designer</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem enim, ultrices ac dui eget,
                            lacinia feugiat neque. Nunc tincidunt semper magna. Nunc varius tincidunt metus vel convallis. Cras
                            interdum iaculis blandit. Curabitur et risus lorem. Duis blandit augue ut nisi porta, vitae aliquam
                            nulla consequat. Nulla tempor, ipsum sed tristique volutpat, nibh eros pellentesque leo, eu vehicula
                            arcu odio gravida quam.
            </p>
            <a href='#' className='read'>Learn More</a>
          </div>

          <div>
            <i className='bx bx-crop' style={{ color: '#00eeff' }}></i>
            <h2>UI/UX Designer</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem enim, ultrices ac dui eget,
                            lacinia feugiat neque. Nunc tincidunt semper magna. Nunc varius tincidunt metus vel convallis. Cras
                            interdum iaculis blandit. Curabitur et risus lorem. Duis blandit augue ut nisi porta, vitae aliquam
                            nulla consequat. Nulla tempor, ipsum sed tristique volutpat, nibh eros pellentesque leo, eu vehicula
                            arcu odio gravida quam.
            </p>
            <a href='#' className='read'>Learn More</a>
          </div>

          <div>
            <i className='bx bxl-apple' style={{ color: '#00eeff' }}></i>
            <h2>UI/UX Designer</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem enim, ultrices ac dui eget,
                            lacinia feugiat neque. Nunc tincidunt semper magna. Nunc varius tincidunt metus vel convallis. Cras
                            interdum iaculis blandit. Curabitur et risus lorem. Duis blandit augue ut nisi porta, vitae aliquam
                            nulla consequat. Nulla tempor, ipsum sed tristique volutpat, nibh eros pellentesque leo, eu vehicula
                            arcu odio gravida quam.
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
