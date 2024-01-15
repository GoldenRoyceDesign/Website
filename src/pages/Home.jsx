import styles from "../style";
import {
  About,
  Business,
  CardDeal,
  CTA,
  Testimonials,
  Hero,
} from "../components";

const Home = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <About />
        <CardDeal />
        <Testimonials />
        <CTA />
      </div>
    </div>
    </>
);

export default Home;
