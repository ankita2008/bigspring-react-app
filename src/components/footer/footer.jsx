import "./footer.css";
import footerLogo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <a href="/">Pricing</a>
            <a href="/">Quick Start</a>
          </div>

          <div className="footer-column">
            <h3>Product</h3>
            <a href="/">Features</a>
            <a href="/">Platform</a>
            <a href="/">Pricing</a>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <a href="/">FAQ</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>

          <div className="footer-column footer-info">
            <img
              src={footerLogo}
              alt="Bigspring Logo"
              className="footer-logo"
            />

            <p>
              Lorem ipsum dolor sit amet,
              consectetur elit. Consjat tristique
              eget amet, tempus eu at cttur.
            </p>

            <div className="social-icons">
              <a href="/">f</a>
              <a href="/">t</a>
              <a href="/">in</a>
              <a href="/">s</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed and Developed By <strong>Themefisher</strong> •
            Distributed by <strong>ThemeWagon</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}