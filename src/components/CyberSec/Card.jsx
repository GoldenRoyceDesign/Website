import {  wave } from "../../assets";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "Vulnerability Assessments",
    description:
      "We conduct thorough assessments of your digital infrastructure to identify potential vulnerabilities and provide actionable insights to fortify your systems.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Penetration Testing",
    description:
      "Our skilled ethical hackers simulate real-world cyber attacks to test the strength of your defenses and identify areas for improvement.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "Security Audits",
    description:
      "We perform detailed audits of your existing security measures to ensure compliance with industry standards and best practices.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "Incident Response",
    description:
      "In the unfortunate event of a security breach, our incident response team is available 24/7 to mitigate the impact and restore normalcy swiftly.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "Security Awareness Training",
    description:
      "We believe that human error is one of the most significant factors in cyber breaches. Our training programs educate your employees about the latest threats, equipping them with the knowledge to make informed decisions and adopt secure practices.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "Network Monitoring",
    description:
      "Our advanced monitoring systems keep a vigilant eye on your network, detecting any suspicious activities in real-time and enabling proactive threat response.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "Data Encryption and Protection",
    description:
      "We implement robust encryption techniques to safeguard your sensitive data, both in transit and at rest, ensuring confidentiality and integrity.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "Security Policy Development",
    description:
      "We assist in creating comprehensive security policies tailored to your organization's needs, providing a strong foundation for a secure environment.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "Other VA/PT",
    description:
      "Cyber Intelligence, Vulnerablity Audit, Cloud Security Audit, Cyber Forensics Audit",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
