import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="footer-icons">
        <img src={facebook} alt="facebook logo" />
        <img src={youtube} alt="youtube logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={pinterest} alt="pinterest logo" />
        <img src={instagram} alt="instagram logo" />
      </div>
      <div className="footer-about">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul className="footer-careers">
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-copyrights">
        <button>Request Invite</button>
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
}
