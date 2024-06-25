// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-heading">Home</h3>
            <ul className="footer-list">
              {/* TODO IMPORT LINK AND LINK TO PAGES */}
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Email</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Gallery</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
            </ul>
          </div>
        </div>
  
        <div className="footer-copyright">
          <p>&copy; Robin's Art Shack. All rights reserved.</p>
          <p>Website was designed by Rashida Strozier
            <br />
            {/* TODO: NAVLINK TO MY WEBSITE */}
            <Link to="wwww.rashidastrozier.com">
            <span className="rashida-link">view Rashida's website</span>
            </Link>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;