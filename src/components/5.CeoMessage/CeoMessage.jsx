import React, {useEffect} from "react";
import "./CeoMessage.css";
import {useLocation} from "react-router-dom";
import ceoImage from "../../assets/assets/professional-woman-business-attire_1308-175589.jpg.avif";

const CeoMessage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#ceo-message") {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="ceo-message" className="ceo-message">
      <div className="ceo-message-content">
        <div className="ceo-message-image">
          <p className="ceo-name">Abigail Smith</p>
          <p className="ceo-signature">Pulldash</p>
        </div>
      </div>

      <div className="ceo-message-text">
        <h2 className="ceo_message_title">Message from Our CEO</h2>
        <p className="ceo_message_description">
          At Abi Construction, our mission is to build high-quality structures
          that stand the test of time. We are committed to excellence,
          innovation, and sustainability in every project we undertake. <br/> Our team
          of dedicated professionals works tirelessly to ensure that our clients'
          visions are brought to life with precision and care. <br/> We believe in
          fostering strong relationships with our clients, partners, and
          communities to create lasting value. Thank you for choosing Abi
          Construction as your trusted partner in building the future. <br/> <strong>
          thank you for choosing Abi Construction as your trusted partner in building the future. </strong>
        </p>
        < button
         className="ceo-message-button"
          onClick={() => { 
            const element = document.getElementById("contact");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Us
        </button>   
      </div>
    </section>
  );
};
export default CeoMessage;
// This CeoMessage component is for displaying a message from the CEO of the construction company //
// It can be used to highlight the company's mission, values, and commitment to quality //
// should be export default CeoMessage;//ß   