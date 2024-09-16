import "./about.scss"
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="imagecontainer">
        <img src="/images/me.jpg" alt="Kenneth Chen" />
      </div>

      <div className="textcontainer">
        <h1>About Me</h1>
        <p>Hi everyone! My name is Kenneth Chen, and I’m currently a sophomore at UMass Boston studying computer science. I’m particularly passionate about software development, with experience in both frontend and backend technologies like Python, JavaScript, and React. Outside of academics, I enjoy playing video games, volleyball, and basketball, and I love learning new languages. I’m always eager to meet new people and expand my knowledge, so I’m looking forward to connecting with you all. Thanks for your time!</p>

        {/* Skill Section placed directly below the paragraph */}
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Swift</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          {/* Backend Development Section */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>C#</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
