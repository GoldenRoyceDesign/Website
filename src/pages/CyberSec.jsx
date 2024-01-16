import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {CyberHero} from "../components";

const CyberSec = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div>
      <CyberHero />
    </div>
  )
}

export default CyberSec