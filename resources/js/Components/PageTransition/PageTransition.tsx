import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";


interface PageTransitionProps{
  children: ReactNode;
}
const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.61, 1, 0.88, 1],
    }
  }
}

const PageTransition = ({children}: PageTransitionProps): JSX.Element =>{
  return (
    <AnimatePresence>
      <motion.div initial="initial" animate="enter" variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 

export default PageTransition;

