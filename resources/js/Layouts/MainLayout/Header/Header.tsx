import { Link } from "@inertiajs/react";
import { motion } from 'framer-motion';

interface HeaderProps{
  open?:boolean;
  changeOpen?: () => void;
}
const Header = ({open, changeOpen}: HeaderProps) => {
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
  
  
  return (
    <header 
      // className="relative w-full min-h-8"
      className="sticky top-0 min-h-6"
      >
      <button 
        // className="fixed right-4 top-2 z-20"
        className="p-3"
        onClick={changeOpen}
        >
          Меню
      </button>
      <motion.nav
        className={`absolute z-20 h-screen top-[64px] left-0 right-0 bottom-0 bg-slate-100 pointer-events-none  ${open && "pointer-events-auto"}`}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={nav}
      >
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