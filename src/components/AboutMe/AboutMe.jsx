import React from 'react';
import '../AboutMe/AboutMe.css'
import aswinraj from './aswinraj2.jpg';

const AboutMe = () => {
  return (
    <section className='about' id='about'>
      <div className='about-img'>
        <img src={aswinraj} alt='aswin picture'></img>
      </div>
      <div className='about-text'>
        <h2>About<span>Me</span></h2>
        <h4>Web Developer !</h4>
        <p>I am Aswinraj S, a passionate Web Developer from Chennai, with a B.Tech in Artificial Intelligence and Data Science.
          My expertise lies in developing dynamic and user-friendly web applications using a robust set of technical skills,
          including: Frontend Technologies: HTML, CSS, JavaScript, Bootstrap, React Backend and Databases: SQL, MongoDB Data Visualization
          and Analytics: Power BI In my academic journey, I have successfully completed innovative projects like my final-year endeavor,
          "Virtual Coercion Detection Using TextBlob Sentimental Analysis", where I applied advanced AI techniques to address
          real-world challenges. As a developer, I am dedicated to crafting seamless, high-performing, and visually engaging web
          solutions that meet modern industry standards. I am always eager to learn, innovate, and contribute to impactful projects.
          Let’s work together to create exceptional digital experiences!</p>

        <a href='#' className='btn-box'>More About Me</a>
      </div>
    </section>
  )
}

export default AboutMe
