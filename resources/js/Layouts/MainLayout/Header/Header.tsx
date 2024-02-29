import { Link } from "@inertiajs/react";
import { motion } from 'framer-motion';
import { useEffect } from "react";

interface HeaderProps {
  open?:boolean;
  changeOpen?: () => void;
  closeNav?: () => void;
}
const Header = ({open, changeOpen, closeNav}: HeaderProps) => {


  // const scrollDirection = useScrollMenu();
  
  // console.log(scrollDirection);
  
  
  const nav = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: { when: "afterChildren" }
    }
  }

  const variants = {
    open: {
      transition: { staggerChildren: 0.09, delayChildren: 0.6 }
    },
    closed: {
      transition: { staggerChildren: 0.07, staggerDirection: -1 },
    }
  };
  const item = {
    open: { 
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
     },
    closed: { 
      y: 50,
      opacity: 0,
      transition: {
      y: { stiffness: 1000 },
    },
     }
  }
  // ${ scrollDirection === 'down' ? "-top-20" : "top-0"}
  
  return (
    <header
      className={`fixed z-50 w-full t-0 min-h-20 transition-all duration-200`}
      >
        <div className="flex min-h-20 items-center justify-end">
          <button 
            className="p-3"
            onClick={changeOpen}
            >
              Меню
          </button>

        </div>
      <motion.nav
        className={`absolute z-50 h-screen top-0 left-0 right-0 bottom-0 bg-slate-100 pointer-events-none  ${open && "pointer-events-auto"}`}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={nav}
      >
        <button onClick={closeNav}>Close</button>
        <motion.ul 
          className="flex flex-col gap-4 justify-center items-center h-full"
          variants={variants}
        >
          <motion.li variants={item}>
            <Link href={route('main')} className="block py-3">Home</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href={route('about')} className="block py-3">About</Link>
          </motion.li>
        </motion.ul>
    </motion.nav>
    </header> 
  )
}

export default Header;