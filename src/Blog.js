import React from "react";
import "./Blog.css";
import coming from './Assets/images/coming.gif'

function Blog() {
  return (
    <div>
      <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={coming} alt="" className="project__img" />
    </div>
  );
}

export default Blog;