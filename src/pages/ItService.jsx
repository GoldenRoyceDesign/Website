import { ITServiceHead, ITServiceContent } from "../components";
import cloudService from "../assets/itservice/cloud-service 1.png";
import consultant from "../assets/itservice/consultant 1.png";
import world from "../assets/itservice/world 1.png";
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
      <ITServiceContent head={""} content={""} img={cloudService} reverse />
      <ITServiceContent head={"NETWORK DESIGN & IMPLEMENTATION"} content={"We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations."} img={world} />
      <ITServiceContent head={""} content={""} img={cloudService} reverse />
      <ITServiceContent head={""} content={""} img={cloudService} />
      <ITServiceContent head={""} content={""} img={cloudService} reverse />
      <ITServiceContent head={""} content={""} img={cloudService} />
    </div>
  );
};

export default ItService;
