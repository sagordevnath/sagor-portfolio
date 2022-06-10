import React from "react";
import "./Services.css";
import { FaPenNib } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Services() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">My Awesome Service</h1>
        <p className="heading p__color">
          I believe in the power of recognition and empowerment leading to great
          employee engagement..
        </p>
        <p className="heading p__color">
          A brand for a company is like a reputation for a person.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <FaPenNib></FaPenNib>
              </div>
              <div className="service__meta">
                <h1 className="service__text">UX/UI Design</h1>
                <p className="p service__text p__color">
                  A user experience (UX) designer works on a team to create
                  products that provide meaningful and enjoyable experiences for
                  users.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FaConnectdevelop></FaConnectdevelop>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Website Development</h1>
                <p className="p service__text p__color">
                  Web developers create and maintain websites. They are also
                  responsible for the site's technical aspects, such as its
                  performance and capacity
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FaMobileAlt></FaMobileAlt>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  Mobile application development is the process of creating
                  software applications that run on a mobile device
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Team Management</h1>
                <p className="p service__text p__color">
                  Team management is a manager or organization's ability to lead
                  a group of people in accomplishing a task or common goal.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FaSearch></FaSearch>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Search Engine Optimization</h1>
                <p className="p service__text p__color">
                  SEO means Search Engine Optimization and is the process used
                  to optimize technical configuration, content
                  relevance and link popularity.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FaPen></FaPen>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Data Entry</h1>
                <p className="p service__text p__color">
                  Data entry is the input of data from various sources into a
                  computer or system, often accomplished by a data entry clerk.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
