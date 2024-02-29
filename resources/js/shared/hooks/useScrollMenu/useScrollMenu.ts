import { useEffect, useState } from "react"


type DirectionType = "up" | "down" | null;

const useScrollMenu = () => {
  const [scrollDirection, setScrollDirection] = useState<DirectionType>(null);

  useEffect(()=>{
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if(direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    }
    window.addEventListener("scroll", updateScrollDirection); 
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
    
  }, [scrollDirection]);

  return scrollDirection;

}

export default useScrollMenu;