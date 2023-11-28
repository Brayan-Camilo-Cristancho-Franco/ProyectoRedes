import React from "react";

import "./About.css";

import AstronautAbout from "../../assets/images/astronaut2.png";

const About = () => {
  return (
    <div
      className="container_about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1>About</h1>
      <div className="about_description">
        <p>

        I'm a sixth-semester Systems Engineering student with a focus on project management, software development, implementation, and information systems design. Proficient in Java, Javascript, Python, HTML, and CSS. Experienced in relational databases and SQL administration. Proactive learner with a commitment to responsibility and effective communication in teamwork.
        </p>
        <div>
          <img
            src={AstronautAbout}
            className="astronaut_image"
            alt="Astronaut"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
