import { useState } from "react"
import useDarkMode from "../Hooks/useDarkMode"
import direction from '../assets/direction.svg'
import direction_dark from '../assets/direction-dark.svg'
import github from '../assets/github-logo.png'
import instagram from '../assets/instagram-logo.png'
import infojobs from '../assets/infojobs-logo.png'

export default function useCarrouselLinks(){
    
    const { darkMode } = useDarkMode();
    const [currentLink, setCurrentLink] = useState<number>(1);
  
    type Link = {
      url: string;
      translate: string;
      link: string
    };
  
    const links: Link[] = [
      { url: instagram, translate: "", link: 'https://www.instagram.com/viictor.mcs/' },
      { url: github, translate: "", link: 'https://github.com/VictorMCS11' },
      { url: infojobs, translate: "", link: 'https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=958531825037956532' },
    ];
  
    const currentDirection = darkMode ? direction_dark : direction;
  
    const moveRight = () => {
      setCurrentLink((prevState) => (prevState >= links.length - 1 ? 0 : prevState + 1));
    };
  
    const moveLeft = () => {
      setCurrentLink((prevState) => (prevState <= 0 ? links.length - 1 : prevState - 1));
    };
  
    const updatedLinks = links.map((link, index) => {
      if (currentLink < index) {
        return { ...link, translate: "translate-x-full" };
      } else if (currentLink > index) {
        return { ...link, translate: "-translate-x-full" };
      } else {
        return { ...link, translate: "translate-x-0" };
      }
    });
  
    return { links: updatedLinks, currentDirection, moveRight, moveLeft };
  }