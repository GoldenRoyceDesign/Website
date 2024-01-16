import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Why Us ?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Golden Royce Design as your trusted partner for cyber security, digital marketing & advertising, and IT solutions and services. With our comprehensive expertise, client-centric approach, and dedication to staying at the forefront of technology, we are committed to helping your business thrive in the digital age.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
