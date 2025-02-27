import React from 'react';
import './Footer.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Discover quality and convenience at our supermarket. With fresh produce, pantry staples, and exceptional service, we're your go-to for all your grocery needs.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email:patelsupermarket1324@gmail.com</p>
          <p>Phon:9631591055</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media:</p>
          <ul className="social-icons">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Supermarket. All Rights Reserved. | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
