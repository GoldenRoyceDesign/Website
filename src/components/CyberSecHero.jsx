import MountainPng from "../assets/cybersec/moon-surface-hd.png"
const CyberHero = () => {
    return (
      <div className=" bg-black/20 h-full">
        <div className="h-full flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-white space-y-4 lg:pr-36">
              <h1 data-aos="fade-up" className="text-5xl font-bold">
              CYBER SECURITY
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
              Our team of experienced cyber security experts is dedicated to understanding your unique security needs and providing tailored solutions to mitigate risks effectively. Whether you're a small business, a multinational corporation, or an individual seeking to safeguard your digital presence, we have the expertise to handle diverse requirements
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <img
          src={MountainPng}
          alt=""
          className="absolute right-0 bottom-0 w-full brightness-50 z-10"
        />
  
        <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
      </div>
    );
  };
  
  export default CyberHero;