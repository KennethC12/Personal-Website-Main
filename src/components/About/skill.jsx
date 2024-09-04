import "./about.scss"
import { FaCheckCircle } from "react-icons/fa";

const Skill = () => {
  return (
    <section className="skill">
      <h5>Skills</h5>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>Swift</h4>
                  <small className="text-light">Intermediate</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
          </div>
        </div>
        {/*End of Frontend*/}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon"/>
                <div>
                  <h4>C#</h4>
                  <small className="text-light">Intermediate</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill