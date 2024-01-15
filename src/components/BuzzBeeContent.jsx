import digitalMarketing from "../assets/buzzbee/digital marketing 1.png";
import print from "../assets/buzzbee/print 1.png";
import copyWriting from "../assets/buzzbee/copy-writing 1.png";
import visualization from "../assets/buzzbee/data-visualization 1.png";
import proposal from "../assets/buzzbee/proposal 1.png";
import brand from "../assets/buzzbee/brand strategy 1.png";
import packageImg from "../assets/buzzbee/package 1.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={digitalMarketing}
            alt="digitalMarketing"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            DIGITAL MEDIA MARKETING
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Social Media Marketing</p>
            <p className="py-2 border-b mx-8">Lead Generation</p>
            <p className="py-2 border-b mx-8">Content Marketing</p>
            <p className="py-2 border-b mx-8">Search Engine Marketing</p>
            <p className="py-2 border-b mx-8">Influencer Marketing</p>
            <p className="py-2 border-b mx-8">Email Marketing</p>
            <p className="py-2 border-b mx-8">Search Engine Optimization</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={print}
            alt="print"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            PRINTING AND DESIGN
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Brochures & Catalogues</p>
            <p className="py-2 border-b mx-8">Pitch Decks</p>
            <p className="py-2 border-b mx-8">Newsletter</p>
            <p className="py-2 border-b mx-8">Annual Report</p>
            <p className="py-2 border-b mx-8">Company Profile</p>
            <p className="py-2 border-b mx-8">Calendar Design</p>
            <p className="py-2 border-b mx-8">Flyers & Posters</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={copyWriting}
            alt="copyWriting"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            CONTENT CREATION
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Website Content</p>
            <p className="py-2 border-b mx-8">Branding Content</p>
            <p className="py-2 border-b mx-8">Social Media Content</p>
            <p className="py-2 border-b mx-8">Translation</p>
            <p className="py-2 border-b mx-8">Copywriting</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={visualization}
            alt="visualization"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            VISUAL STRATEGIES
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Explainer Videos</p>
            <p className="py-2 border-b mx-8">Documentaries</p>
            <p className="py-2 border-b mx-8">Photography</p>
            <p className="py-2 border-b mx-8">Corporate Videos</p>
            <p className="py-2 border-b mx-8">Videography</p>
            <p className="py-2 border-b mx-8">Animation Videos</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={proposal}
            alt="proposal"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            PROPOSAL, PITCH & DESIGNING
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Business Proposal</p>
            <p className="py-2 border-b mx-8">Pitch Deck</p>
            <p className="py-2 border-b mx-8">Company Profile</p>
            <p className="py-2 border-b mx-8">Corporate Presentation</p>
            <p className="py-2 border-b mx-8">Official Documents</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={brand}
            alt="brand"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            BRAND STRATEGY SERVICES
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Brand Creation</p>
            <p className="py-2 border-b mx-8">
              Brand Identity, Insights & Positioning
            </p>
            <p className="py-2 border-b mx-8">Messaging & Narratives</p>
            <p className="py-2 border-b mx-8">Brand Experiences</p>
            <p className="py-2 border-b mx-8">Campaign Development</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={packageImg}
            alt="packageImg"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            PACKAGING SOLUTIONS
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Moduled Packaging Design</p>
            <p className="py-2 border-b mx-8">Packaging Label Design</p>
            <p className="py-2 border-b mx-8">Identical Packaging Design</p>
            <p className="py-2 border-b mx-8">Secure Packaging Design</p>
            <p className="py-2 border-b mx-8">Product Packaging Design</p>
            <p className="py-2 border-b mx-8">Bottle Packaging Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
