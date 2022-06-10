import React from "react";
import "./About.css";
import aboutImg from "./Assets/images/about.jpg";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
    
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img  data-aos="zoom-in-right" style={{height: '500px'}} src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 data-aos="fade-down-left" className="about__heading">About Me</h1>
            <div data-aos="flip-right" className="about__meta">
              <p className="about__text p__color">
                Hi there,
                I am Sagor Devnath. I am a Junior Web developer and UI&UX designer. I have Business Administration tecnology. Web development an design is what I'm doing presently.
              </p>
              <p className="about__text p__color">
                I have experience with Tailwind CSS, React JS, Javascript, CSS3, HTML5 and Bootstrap. I have also experience with nodeJS, mongoDB, ExpressJS, Firebase, JWT and payment integration in website. So if you are intereste in having a website, a new design, a web design, Figma design and HTML&CSS design, the fell free to let me know and I will be happy to work with you.
              </p>
              <p className="about__text p__color">
                Thanks
              </p>
              <div className="about__button d__flex align__items__center">                
                <a href="#Contact">
                  <button data-aos="flip-right" className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;