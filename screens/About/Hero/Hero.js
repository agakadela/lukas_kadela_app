import cn from "classnames";
import styles from "./hero.module.css";
import Breadcrumb from "../../../components/Breadcrumb";
import { motion } from "framer-motion";
import { variants, item } from "../../../variants/animation";
import Service from "../../../components/Service";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Item from "./Item";
import { Link as AnchorLink } from "react-scroll";

const items = [
  {
    color: "#b1e5fc",
    number: "#1",
    title: "Mission",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    color: "#ffbc99",
    number: "#2",
    title: "Goals",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    color: "#cabdff",
    number: "#3",
    title: "Why me?",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className={cn("section", styles.section)}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Breadcrumb name="ABOUT" />
          <motion.h1 variants={item} className={cn("hero", styles.title)}>
            About us
          </motion.h1>
          <motion.p variants={item} className={cn("body", styles.subtitle)}>
            Pellentesque tincidunt tristique neque, eget venenatis enim gravida
            quis. Fusce at egestas libero. Cras convallis egestas ullamcorper
            suspens.
          </motion.p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image_container}>
            <img className={styles.image} src="/images/avatar.jpg" />
          </div>
          <div className={styles.bottom_content}>
            <span className={cn("hairline-small", styles.text)}>FEATURES</span>
            <h1 className={cn("h2", styles.bottom_content_title)}>
              Phasellus Risus Turpis, Pretium Sit Amet Magna
            </h1>
            <div className={styles.items_wrapper}>
              {items.map((item, index) => (
                <ScrollAnimation>
                  <Item key={index} {...item} />
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation>
              <AnchorLink to="learnmore" smooth={true}>
                <button className={cn("button", styles.button)}>
                  Learn More
                </button>
              </AnchorLink>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
