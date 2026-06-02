import "./navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src={logo} alt="Bigspring Logo" />
        </div>

        <nav className="nav-links">
          <a href="/" className="active">Home</a>
          <a href="/">Blog</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
          <a href="/">FAQ</a>
        </nav>

        <button className="nav-btn">
          Get Started
        </button>

      </div>
    </header>
  );
}