import Dropdown from '../dropdown/dropdown'
import './Navbar.scss'
import { motion } from 'framer-motion'


const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Dropdown Menu*/}
      <Dropdown />
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}>
          Kenneth Chen
          </motion.span>
        <div className="social">
          <a href='https://github.com/KennethC12'><img src="/images/github-logo.png" alt="" /></a>
          <a href='https://www.linkedin.com/in/kenneth-chen-406860219/'><img src="/images/linkedin.png" alt="" /></a>
          <a href='#'><img src="/images/Email.png" alt="" /></a>

        </div>
      </div> 
    </div>
  )
}

export default Navbar