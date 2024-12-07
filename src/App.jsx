import './App.css'
import AboutMe from './components/AboutMe/AboutMe';
import Navbar from './components/navbar/Navbar';
import 'boxicons/css/boxicons.min.css';
import MyServices from './components/services/MyServices';
import MySkills from './components/MySkills/MySkills';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home';


function App() {

  return(
    <>
     <Navbar />
      <div id="home">
      <br></br>
        <Home />
      </div>
      <div id="about">
      <br></br>
        <AboutMe />
      </div>
      
        <MyServices />
    
      <div id="skills">
      <br></br>
      <br></br>
      <br></br>
        <MySkills />
      </div>
      <div id="portfolio">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <MyProjects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>

    </>
  )
}

export default App




{/* <div>ASWIN Name = {import.meta.env.VITE_EXAMPLE}</div> */}
