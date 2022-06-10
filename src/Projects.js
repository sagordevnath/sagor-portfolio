import React from "react";
import "./Projects.css";
import Project1 from './Assets/images/portfolio-1.jpg';
import Project2 from './Assets/images/portfolio-2.jpg';
import Project3 from './Assets/images/portfolio-3.jpg';
import Project4 from './Assets/images/portfolio-4.jpg';
import Project5 from './Assets/images/portfolio-5.jpg';
import Project6 from './Assets/images/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
        MyProject is an innovative software solution for managing documents and project data in distributed projects.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Nath Manutacturers</h5>
                     <h4 className="project__text">A Manufacture website</h4>
                     <a href="https://github.com/sagordevnath/nath-manufacturers-client" target='_blank' className="project__btn">Client</a>
                     <br/>
                     <a href="https://github.com/sagordevnath/nath-manufacturers-server" target='_blank' className="project__btn">Server</a>
                     <br/>
                     <a href="https://nath-manufacturing.web.app" target='_blank' className="project__btn">Live</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Nath Toys</h5>
                     <h4 className="project__text">A Warehouse management website</h4>
                     <a href="https://github.com/sagordevnath/nath-toys-client" target='_blank' className="project__btn">Client</a>
                     <br/>
                     <a href="https://github.com/sagordevnath/nath-toys-server" target='_blank' className="project__btn">Server</a>
                     <br/>
                     <a href="https://nath-toys.web.app" target='_blank' className="project__btn">Live</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Care Giver</h5>
                     <h4 className="project__text">An Independent service website</h4>
                     <a href="https://github.com/sagordevnath/care-giver" target='_blank' className="project__btn">Github</a>
                     <br/>
                     <a href="https://care-giver-82af9.web.app" target='_blank' className="project__btn">Live</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">React Analysis</h5>
                     <h4 className="project__text">A product analysis based website</h4>
                     <a href="https://github.com/programming-hero-web-course-4/product-analysis-website-sagordevnath" target='_blank' className="project__btn">Github</a>
                     <br/>
                     <a href="https://react-analysis-sagor.netlify.app" target='_blank' className="project__btn">Live</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Laptop Corner</h5>
                     <h4 className="project__text">A cart based website</h4>
                     <a href="https://github.com/Programming-Hero-Web-Course4/lucky-one-sagordevnath" target='_blank' className="project__btn">Github</a>
                     <br/>
                     <a href="https://laptop-corner-sagor.netlify.app" target='_blank' className="project__btn">Live</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Convention center</h5>
                     <h4 className="project__text">A convention center website</h4>
                     <a href="https://github.com/Porgramming-Hero-web-course/convention-center-sagordevnath" target='_blank' className="project__btn">Github</a>
                     <br/>
                     <a href="https://convention-center-sagor.netlify.app" target='_blank' className="project__btn">Live</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;