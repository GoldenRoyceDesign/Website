import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

import { ITServiceHead, ITServiceContent } from "../components";

const ItService = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <ITServiceHead />
      <ITServiceContent
        title={"IT CONSULTING"}
        content={
          "Our seasoned consultants work closely with you to understand your business goals, challenges, and requirements. We provide strategic guidance and help you make informed decisions when it comes to technology adoption, infrastructure planning, and IT strategy development."
        }
        reverse
        img={""}
      />
      <ITServiceContent
        title={"NETWORK DESIGN & IMPLEMENTATION"}
        content={
          "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations."
        }
        img={""}
      />
      <ITServiceContent
        title={"CLOUD SERVICES"}
        content={
          "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations."
        }
        reverse
        img={""}
      />
      <ITServiceContent
        title={"IT SUPPORT & MANAGED SERVICE"}
        content={
          "Our seasoned consultants work closely with you to understand your business goals, challenges, and requirements. We provide strategic guidance and help you make informed decisions when it comes to technology adoption, infrastructure planning, and IT strategy development."
        }
        reverse
        img={""}
      />
      <ITServiceContent
        title={"NETWORK DESIGN & IMPLEMENTATION"}
        content={
          "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations."
        }
        img={""}
      />
      <ITServiceContent
        title={"DATA BACKUP AND RECOVERY"}
        content={
          "We implement robust backup and disaster recovery solutions to safeguard your critical data. Our strategies ensure business continuity in the face of unexpected events, protecting you from data loss and minimizing the impact of disruptions."
        }
        reverse
        img={""}
      />
      <ITServiceContent
        title={"CYBER SECURITY"}
        content={
          "We prioritize the security of your digital assets and information. Our cybersecurity services include risk assessments, vulnerability management, threat detection, incident response, and employee awareness training. We work diligently to safeguard your networks, systems, and sensitive data from ever-evolving cyber threats."
        }
        img={""}
      />
      <ITServiceContent
        title={"SOFTWARE DEVELOPEMENT"}
        content={
          "Our talented software development team crafts custom applications, tailored software solutions, and mobile apps to meet your unique business requirements. We combine innovation, creativity, and technical expertise to deliver user-friendly, scalable, and secure software solutions."
        }
        reverse
        img={""}
      />
    </div>
  );
};

export default ItService;
