import "./pokeball.scss"




const Pokeball = () => {
  return (
    <div className="pokeballs">
      <nav>
        <button className="pokeball">
          <a href="#About">
            <img src = "/Personal-Website/images/pokeball.png" alt="Pokeball"></img>
            <span5 className="label5">About Me</span5>
          </a>
        </button>
      </nav>

      <nav>
        <button className="mpokeball">
          <a href="#Project">
            <img src = "/Personal-Website/images/mpokeball.png" alt="Master Ball"></img>
            <span4 className="label4">Projects</span4>
          </a>
        </button>
      </nav>
      
      <nav>
        <button className="TRpokeball">
          <a href="#Contact">
            <img src = "/Personal-Website/images/TRpokeball.png" alt="Team Rocket Ball"></img>
            <span3 className="label3">Contact</span3>
          </a>
        </button>
      </nav>

      ({/*Not sure how to do resume yet*/})
      <nav>
      <button className="upokeball">
        <img src = "/Personal-Website/images/upokeball.png" alt="Ultra Ball"></img>
        <span2 className="label2">Resume</span2> 
      </button>
      </nav>

      <nav>
        <button className="gpokeball">
          <a href="#Experience">
            <img src = "/Personal-Website/images/gpokeball.png" alt="Great Ball"></img>
            <span className="label">Experience</span>
          </a>
        </button>
      </nav>
    </div>
  )
}


export default Pokeball;