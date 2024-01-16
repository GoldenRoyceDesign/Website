import { bill } from "../../assets";
import styles, { layout } from "../../style";

const Billing = () => (
  <section id="aboutus" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We are a dynamic and innovative company specializing in three key verticals: Cyber Security, Digital Marketing & Advertising, and IT Solutions and Services. Our mission is to empower businesses and individuals with cutting-edge technologies and strategies that drive exceptional results.
      </p>
    </div>
  </section>
);

export default Billing;
