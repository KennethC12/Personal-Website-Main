import { motion } from "framer-motion";
import "./dropdown.scss";
import Links from "./Links/links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState } from "react";

const variants = {
  open: {
    clipPath:"circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    }
  },
  closed: {
    clipPath:"circle(30px at 50px 50px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Dropdown = () => {
  const [open,setOpen] = useState(false)


  return (
    <motion.div className="dropdown" animate={open ? "open" : "closed"}>
    <motion.div className="bg" variants={variants}>
      <Links />
    </motion.div>
    <ToggleButton setOpen={setOpen}/>
    </motion.div>

  );
    
};

export default Dropdown;