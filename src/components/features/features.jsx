import React from "react";
import "./features.css";
import cleanCode from "../../assets/images/cline-code.svg";
import objectOriented from "../../assets/images/object-oriented.svg";
import service24 from "../../assets/images/24h-service.svg";
import valueMoney from "../../assets/images/value-money.svg";
import fastResponse from "../../assets/images/fast-response.svg";
import cloudSupport from "../../assets/images/cloud-support.svg";

import {
  FaCode,
  FaDesktop,
  FaUserFriends,
  FaHeart,
  FaTachometerAlt,
  FaCloud,
} from "react-icons/fa";

function Features() {
  const data = [
  {
    image: cleanCode,
    title: "Clean Code",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
  },
  {
    image: objectOriented,
    title: "Object Oriented",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
  },
  {
    image: service24,
    title: "24h Service",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
  },
  {
    image: valueMoney,
    title: "Value for Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
  },
  {
    image: fastResponse,
    title: "Faster Response",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
  },
  {
    image: cloudSupport,
    title: "Cloud Support",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
  },
];
  return (
    <section className="features">
      <div className="container">
        <h1>Something You Need To Know</h1>

        <div className="features-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
