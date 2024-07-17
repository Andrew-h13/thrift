import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are committed to providing the best service.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section">
            <h4 className="follow">Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook-circle icon-group"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-twitter icon-group"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram icon-group"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
