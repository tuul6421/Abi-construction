import "./Footer.css";
import {FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"; 
import {FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contai1ner">
      <div className="footer-left">
        <img
         src="../../assets/assets/abi  logo .jpg"
         alt="Logo"
         className="footer-logo" />
        <p className="footer-company-name">Abi Construction</p>
        </div>
      <div className="footer-nev">
      <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-contact">
        <p><FaMapMarkerAlt /> 1234 Builder's Lane, Construct City, ST 56789</p>
        <p><FaPhone /> +1 (123) 456-7890</p>
        <p><FaEnvelope /> Abi@company.com</p>
      </div>

      <div className="footer-bottom">
      <p> © {new Date().getFullYear()} Abi Construction. All rights reserved.</p>
      </div>
      </div>  
    </footer>
  );
};
export default Footer;
// This Footer component is for displaying the footer section of the construction company website //
// It can be used to provide contact information, quick links, and company details //
// should be export default Footer;//