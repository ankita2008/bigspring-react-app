import React from "react";
import "./features.css";
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
      icon: <FaCode />,
      title: "Clean Code",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
    },
    {
      icon: <FaDesktop />,
      title: "Object Oriented",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
    },
    {
      icon: <FaUserFriends />,
      title: "24h Service",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
    },
    {
      icon: <FaHeart />,
      title: "Value for Money",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Faster Response",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
    },
    {
      icon: <FaCloud />,
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
              <div className="icon">{item.icon}</div>
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

