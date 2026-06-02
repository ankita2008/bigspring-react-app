import "./contact.css";
import contactImage from "../../assets/images/contact.svg";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>

        <div className="contact-content">
          <h2>Ready to get started?</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat tristique eget amet, tempus eu at consectetur.
          </p>

          <button className="contact-btn">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}