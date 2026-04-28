import "./footer.css"
import logo from "../../img/logo.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 footer-section">
            <div className="footer-logo">  <i className="fa-solid fa-shop"></i> Ogani Ecommerce</div>
            <p className="footer-about">
              We are dedicated to providing the best service to our customers.
              Our mission is to create innovative solutions that make a difference
              in people's lives.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 footer-section">
  <h5>Our Ogani Services</h5>
 <ul className="footer-links">
    <li><a href="#">Fresh Vegetables</a></li>
    <li><a href="#">Bell Peppers & Chili</a></li>
    <li><a href="#">Leafy Greens</a></li>
    <li><a href="#">Fresh Chicken & Poultry</a></li>
    <li><a href="#">Organic Products</a></li>
    <li><a href="#">Seasonal Fruits</a></li>
    <li><a href="#">Herbs & Spices</a></li>
</ul>
</div>


          {/* Newsletter */}
          <div className="col-lg-3 footer-section">
            <h5>Newsletter</h5>
            <p className="footer-about">
              Subscribe to our newsletter for updates, news, and exclusive offers.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Enter your email" />
              <button className="newsletter-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
          <p>© 2024 CompanyName. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
