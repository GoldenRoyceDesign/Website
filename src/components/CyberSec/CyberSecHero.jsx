import Hero from "./Hero";
import Card from "./Card";
import Card2 from "./Card2";
import { cybersecherovid, cyb1 } from "../../assets";

const SecurityAuditList = () => {
  const securityAuditItems = [
    'Web App Security Audit',
    'API Security Audit',
    'Thick Client Security Audit',
    'Secure Code Review',
    'Mobile App Security Audit',
    'Database Security Audit',
    'Website Security Audit',
  ];

  return (
    <ul className="list-disc pl-4">
      {securityAuditItems.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

const CyberSecHero = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={cybersecherovid} type="video/mp4" />
        </video>
        <Hero />
      </div>
      <Card />
      <Card2 img={cyb1} title={"Application VA/PT"} content={<SecurityAuditList />} />
    </div>
  );
};

export default CyberSecHero;
