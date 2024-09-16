import "./pokeball.scss"

const Pokeball = () => {
  return (
    <div className="pokeballs">
      <nav>
        <a href="#About" className="pokeball">
          <img src="/images/pokeball.png" alt="Pokeball" />
          <span className="label">About Me</span>
        </a>
      </nav>

      <nav>
        <a href="#Project" className="mpokeball">
          <img src="/images/mpokeball.png" alt="Master Ball" />
          <span className="label">Projects</span>
        </a>
      </nav>
      
      <nav>
        <a href="#Contact" className="TRpokeball">
          <img src="/images/TRpokeball.png" alt="Team Rocket Ball" />
          <span className="label">Contact</span>
        </a>
      </nav>

      <nav>
        <button className="upokeball">
          <img src="/images/upokeball.png" alt="Ultra Ball" />
          <span className="label">Resume</span> 
        </button>
      </nav>


      <nav>
        <a href="#Experience" className="gpokeball">
          <img src="/images/gpokeball.png" alt="Great Ball" />
          <span className="label">Contact</span>
        </a>
      </nav>
    </div>
  )
}

export default Pokeball;
