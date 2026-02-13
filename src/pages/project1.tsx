import Header from "../components/1.Header/Header";
import Hero from "../components/Hero";
import Contact from "../components/6.Contact/Contact";
import Footer from "../components/7.Footer/Footer";

const Project1 = () => {
  return (
    <>
      <Header />
      <div className="project1_page">
        <h1>Project 1</h1>
        <img src="/public/project1.jpg" alt="Project 1 Image" />
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
          <a href="/project2" className="next-link">
            Next Project
          </a>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Project1;
