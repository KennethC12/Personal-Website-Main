import "./about.scss"
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="imagecontainer">
        <img src="/images/me.jpg" />
        
      </div>
      <div className="textcontainer">
        <h1>About Me</h1>
        <p>Hi, my name is Kenneth Chen. I'm currently a Sophomore at Umass Boston studying computer science. 
          Some of my hobbies are playing video games, volleyball, and basketball. I love learning new languages and much more.</p>
      </div>


      <div className="skill">
      <h5> </h5>
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
    </div>

    </div>
  )

}


export default About