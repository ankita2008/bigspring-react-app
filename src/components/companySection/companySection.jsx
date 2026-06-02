import { useState, useEffect } from "react";
import "./companySection.css";

import slide1 from "../../assets/images/service-slide-1.png";
import slide2 from "../../assets/images/service-slide-2.png";
import slide3 from "../../assets/images/service-slide-3.png";

export default function CompanySection() {
  const slides = [slide1, slide2, slide3];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="company-section">
      <div className="company-container">

        {/* left Slider */}
        <div className="company-slider">
          <img
            src={slides[activeSlide]}
            alt="company Marketing"
            className="slider-image"
          />

          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* right Content */}
        <div className="company-content">
          <h2>
            A company standing different
            <br />
            from others     
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat tristique eget amet, tempus eu at consectetur.
            Leo facilisi nunc viverra tellus. Ac laoreet sit vel
            consequat. Consectetur adipiscing elit.
          </p>

          <a href="/" className="check-btn">
            Check it out →
          </a>
        </div>


      </div>
    </section>
  );
}