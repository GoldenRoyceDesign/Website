import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {CyberHero} from "../components";
import "./CyberSecHero.css";
const CyberSec = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="bg-dimWhite">
      <CyberHero />
    </div>
  )
}

export default CyberSec