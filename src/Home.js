import React, {useState} from "react";
import "./Home.css";
import logo from "./Assets/images/logo.png";
import resume from "./Assets/resume/sagor_junior-web-developer_resume.pdf";
import Services from "./Services";
import About from "./About";
import Projects from './Projects';
import Contact from "./Contact";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu//
   const [show, setShow] = useState(false);
  return (
    <>
    <div className="home" id="Home">
      <div className="home__bg">        
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 data-aos="fade-up-left" data-aos="fade-in" className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 data-aos="fade-right" className="home__text pz__10">Hi, I’m Sagor Devnath</h2>
              <h3 data-aos="fade-right" className="home__text sweet pz__10">Junior Web Developer.</h3>
              <div data-aos="flip-right" className="about__button d__flex align__items__center">
              <a href={resume} target="_blank" download>
                  <button className="about btn pointer">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About></About>
    <Services></Services>
    <Projects></Projects>
    <Contact></Contact>
    </>

);
}

export default Home;