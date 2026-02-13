import React from "react";
import "./Service.css";

const Service = () => {
const services = [
    {
      title: "Design and Planning",
      description:
        "We provide comprehensive design and planning services to ensure your project meets all specifications and regulations.",
    },
    {
      title: "Structural Work",
      description:
        "Our team specializes in structural work, ensuring the integrity and safety of your construction projects.",
    },
    {
      title: "Finishing",
      description:
        "We offer high-quality finishing services to give your project a polished and professional look.",
    },
  ];  

  return (
    <section id="services" className="Service">
      <h2 className="service_title">Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service_item">
            <h3 className="service_card_title">{service.title}</h3>
            <p className="service_card_description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="additional_services">
        <h2 className="service_title">Our Services</h2>
        <h3>Design and planning </h3>
        <p className="service_description">
          We offer a wide range of construction services to meet your needs.
          <h3>Structural work </h3>
        <p className="service_description">     
          Our team of experts will manage your project from start to finish,
          ensuring quality and timely completion.   </p>
        </p>
      </div>
    </section>
  );
}
export default Service;
// This Service component is for showcasing the services offered by the construction company //
// It can be used to highlight key services such as design, planning, structural work, and finishing //
// should be export default Service;//