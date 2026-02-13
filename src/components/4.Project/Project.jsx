import "./Project.css";
import img1 from "../../assets/assets/Pic1.jpeg";
import img2 from "../../assets/assets/pexels-olly-927022.jpg";
import img3 from "../../assets/assets/Unknown.png";

const projectData = [
  {
    id: "project1",
    title: "Residential Buildings",
    description:
      "We have successfully completed numerous residential construction projects, delivering quality homes to our clients.",
    image: img1,
    link: "/project1"
  },
  {
    id: "project2",
    title: "Commercial Complexes",
    description:
      "Our portfolio includes a variety of commercial buildings, showcasing our expertise in large-scale construction.",
    image: img2,
    link: "/project2"
  },
  {
    id: "project3", 
    title: "Industrial Facilities",
    description:
      "We specialize in constructing industrial facilities that meet the highest standards of safety and efficiency.",
    image: img3,
    link: "/project3"
  }
];

const Project = () => {
  return (
    <section id="projects" className="project">
        <h2 className="project-title">Our Projects</h2>

        {projectData.map((project, index) => (
        <div 
        key={project.id}  
        id ={project.id}
        className={`project-item ${index % 2 === 0 ? "left" : "right"}`}> 
        <div className="project-item-content">
              <img
               src={project.image}
               alt={project.title} 
               className="project-image" />
               <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">View Details</a>
            </div>  
        </div>
      </div>
    ))} 
    </section>  
  );
}   
export default Project;
