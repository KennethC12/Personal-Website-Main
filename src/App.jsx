import './App.scss';
import Contact from './components/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Pokeball from './components/Pokeball/Pokeball';
import About from './components/About/about';
import Project from './components/Project/Project';


const App = () => {
  
  return <div>
    <section id = "Home">
      <Navbar/>
      <Pokeball/> 
    </section>
    <section id = "About">
      <About/>
      
      </section>
    <Project/>
    {/* <section id = "Experience">Experience</section> */}
    <section id="Contact"><Contact/></section>
  </div>
}
export default App;
