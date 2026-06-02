import "./hero.css";
import heroImage from "../../assets/images/hero.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Let us solve your critical website
            development challenges
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam nihil enim maxime corporis cumque totam aliquid nam
            sint inventore optio modi neque laborum officiis
            necessitatibus.
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Hero Illustration" />
        </div>

      </div>
    </section>
  );
}