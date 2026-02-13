import { useState, useEffect } from "react"; 
import "./Hero.css";
import img1 from "../assets/assets/images.jpeg";
import img2 from "../assets/assets/pexels-olly-927022.jpg";
import img3 from "../assets/assets/Unknown.png";

const image1 = {
  src: img1,
  title:"Welcome to Abi constraction",
  subtitle: "Innovative Construction Solutions",
  description: "Building your dreams with quality and care.",
  link: "/project1"
};

const image2 = {
  src: img2,
  title: "Our Comitment to Excellence",
  subtitle: "Commercial Complex Development",
  description: "Modern Residential Building",
  link: "/project2"
};

const image3 = {
  src: img3,
  title: "Transforming Spaces, Creating Value",
  subtitle: "Industrial Facility Construction",
  description: "Efficient and Sustainable Designs",
  link: "/project3"
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImageIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
          </div>
        ))}
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Planning, Designing and Building Your Dreams
        </h1>
        <p className="hero-subtitle">
          We turn your vision into reality with our expert construction services.
        </p>
        <a href="#contact" className="cta-button" onClick={() => { const element = document.getElementById("contact"); element.scrollIntoView({ behavior: "smooth" }); }}>
          Contact Us
        </a>
      </div>
      <div className="hero-description">
        <p>{images[currentImageIndex].description}</p>
        <a href={images[currentImageIndex].link} className="detail-button">View details</a>
      </div>
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;