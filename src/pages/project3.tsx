import Header from "../components/1.Header/Header";
import Hero from "../components/Hero";
import Contact from "../components/6.Contact/Contact";
import Footer from "../components/7.Footer/Footer";
import Project1 from "./project1";

const Project3 = () => {
  return (
    <>
      <Header />
      <div className="project3_page">
        <h1>Project 3</h1>
        <img src="/public/project3.jpg" alt="Project 3 Image" />
        <p>
          This project involved the construction of a modern residential
          building with sustainable design principles. The building features
          energy-efficient systems, eco-friendly materials, and innovative
          architectural elements that blend seamlessly with the surrounding
          environment. The project was completed on time and within budget,
          showcasing our commitment to quality and sustainability in
          construction.
        </p>

        <div className="navigation-button">
          <a href="/" className="back-link">
            Back to Projects
          </a>
          <a href="/project1" className="next-link">
            Next Project
          </a>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Project3;
