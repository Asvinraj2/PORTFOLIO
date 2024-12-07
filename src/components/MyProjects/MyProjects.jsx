import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './MyProjects.css';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';

const MyProjects = () => {
  return (
    <section>
      <div className="portfolio" id="project">
        <div className="main-text">
          <h2>
            Latest <span>Projects</span>
          </h2>
        </div>
        <div className="portfolio-content">
          <a href="https://github.com/Asvinraj2" className="project-link" aria-label="View Project 1">
            <div className="row">
              <img src={img1} alt="project image1" />
              <div className="layer">
                <h5>UI/UX DESIGN</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i className="bx bx-link-external"></i>
              </div>
            </div>
          </a>
          <a href="https://github.com/Asvinraj2" className="project-link" aria-label="View Project 2">
            <div className="row">
              <img src={img2} alt="project image2" />
              <div className="layer">
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i className="bx bx-link-external"></i>
              </div>
            </div>
          </a>
          <a href="https://github.com/Asvinraj2" className="project-link" aria-label="View Project 3">
            <div className="row">
              <img src={img3} alt="project image3" />
              <div className="layer">
                <h5>Graphic Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i className="bx bx-link-external"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
