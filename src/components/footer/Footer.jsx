import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>

        <div className="footer-col">
          <h4>Communities</h4>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>

        <div className="footer-col">
          <h4>Useful links</h4>
          <p>Support</p>
          <p>Free Mobile App</p>
          <p>Popular by Country</p>
          <p>Import your music</p>
        </div>

        <div className="footer-col">
          <h4>Spotify Plans</h4>
          <p>Premium Lite</p>
          <p>Premium Standard</p>
          <p>Premium Platinum</p>
          <p>Premium Student</p>
          <p>Spotify Free</p>
        </div>

        <div className="social-icons">
          <div className="icon"><FaInstagram /></div>
          <div className="icon"><FaTwitter /></div>
          <div className="icon"><FaFacebookF /></div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Spotify AB</p>
      </div>
    </footer>
  );
}

export default Footer;