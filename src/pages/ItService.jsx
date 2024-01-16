import { ITServiceHead, ITServiceContent } from "../components";
import cloudService from "../assets/itservice/cloud-service 1.png";
import consultant from "../assets/itservice/consultant 1.png";
import world from "../assets/itservice/world 1.png";
import dataRecovery from "../assets/itservice/data-recovery.png";
import internet from "../assets/itservice/internet-security.png"
const ItService = () => {
  return (
    <div>
      <ITServiceHead />
      <ITServiceContent
        head={"IT CONSULTING"}
        content={
          "Our seasoned consultants work closely with you to understand your business goals, challenges, and requirements. We provide strategic guidance and help you make informed decisions when it comes to technology adoption, infrastructure planning, and IT strategy development."
        }
        img={consultant}
      />
      <ITServiceContent
        head={"CLOUD SERVICES"}
        content={
          "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations."
        }
        img={cloudService}
        reverse
      />
      <ITServiceContent
        head={"NETWORK DESIGN & IMPLEMENTATION"}
        content={
          "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations."
        }
        img={world}
      />
      <ITServiceContent
        head={"DATA BACKUP AND RECOVERY"}
        content={
          "We implement robust backup and disaster recovery solutions to safeguard your critical data. Our strategies ensure business continuity in the face of unexpected events, protecting you from data loss and minimizing the impact of disruptions."
        }
        img={dataRecovery}
        reverse
      />
      <ITServiceContent head={"IT SUPPORT & MANAGED SERVICE"} content={"Our seasoned consultants work closely with you to understand your business goals, challenges, and requirements. We provide strategic guidance and help you make informed decisions when it comes to technology adoption, infrastructure planning, and IT strategy development."} img={internet} />
      <ITServiceContent head={""} content={""} img={cloudService} reverse />
      <ITServiceContent head={""} content={""} img={cloudService} />
    </div>
  );
};

export default ItService;
