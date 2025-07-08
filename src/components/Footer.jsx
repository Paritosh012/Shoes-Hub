import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "../pages/Home.css";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white pt-5 pb-4 mt-5"
      style={{ position: "relative", bottom: 0, width: "100%" }}
    >
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Logo & Description */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Shoe Hub
            </h5>
            <p>
              Your one-stop destination for premium footwear from top brands
              like Nike, Adidas, and Red Chief.
            </p>
          </div>

          {/* Products */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Brands
            </h5>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Nike
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Adidas
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Red Chief
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                All Products
              </a>
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </h5>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Your Account
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Order Tracking
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Shipping & Returns
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                FAQs
              </a>
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>
              <i className="fas fa-home me-2"></i> Kanpur, India
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> info@shoehub.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +91 9876543210
            </p>
            <p>
              <i className="fas fa-print me-2"></i> +91 1234567890
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-8 col-lg-8">
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white fs-5 me-4">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5 me-4">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5 me-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5 me-4">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="text-white-50">
              © {new Date().getFullYear()} Shoe Hub | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
