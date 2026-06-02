import "./cyberSection.css";
import cyberImg from "../../assets/images/service-slide-1.png";

export default function CyberSection() {
  return (
    <section className="cyber-section">
      <div className="cyber-container">

        <div className="cyber-image">
          <img src={cyberImg} alt="Cyber Security Dashboard" />
        </div>

        <div className="cyber-content">
          <h2>
            It is a privately owned
            <br />
            Information and cyber security
            <br />
            company
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat tristique eget amet, tempus eu at consectetur.
            Leo facilisi nunc viverra tellus. Ac laoreet sit vel
            consequat. Consectetur adipiscing elit.
          </p>

          <a href="/" className="cyber-link">
            Check it out →
          </a>
        </div>

      </div>
    </section>
  );
}