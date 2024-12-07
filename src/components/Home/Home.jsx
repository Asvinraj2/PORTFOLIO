import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'boxicons/css/boxicons.min.css';
import './Home.css';

const Home = () => {

    useEffect(() => {
        const typed = new Typed("#text", {
          strings: ["AI Engineer", "Frontend Developer", "Web Developer"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

  return (
    <section className='home'>
        <div className='home-content'>
          <h3>Hello, it's Me</h3>
          <h1>Aswinraj</h1>
          <h3>And I'm a <span id="text"></span></h3>
          <p>I'm a B.Tech graduate in Artificial Intelligence and Data Science with a strong foundation 
          in technology and problem-solving. My technical expertise includes HTML, CSS, Bootstrap, 
          JavaScript,React JS, SQL, Power BI, and Java, enabling me to create robust web applications and data-driven solutions.</p>
          <div className='Home-sci'>
            <a href="https://www.instagram.com/aswin_unofficial_?igsh=N2pxdXhvOWVzZmd0" target='_blank'> <i class='bx bxl-instagram'></i></a>
            <a href="#" style={{ "--i": 7 }}> <i class='bx bxl-youtube'></i></a>
            <a href="https://x.com/Aswin_soundaraj?t=cuDG8ZwiA3TEsmx0g_lsBQ&s=08" target='_blank' style={{ "--i": 8 }}> <i class='bx bxl-twitter'></i></a>
            <a href="#" style={{ "--i": 9 }}> <i class='bx bxl-whatsapp'></i></a>
            <a href="https://www.linkedin.com/in/aswinraj-s-264395264" target='_blank' style={{ "--i": 10 }}> <i class='bx bxl-linkedin'></i></a>
          </div>
          <a href='#about' className="btn-box">More about Me</a>
          <a href="/Aswinraj_Resume.pdf" id="down" className="btn-box download-btn" download>
    Download CV
</a>

        </div>
    </section>
  );
}

export default Home;
