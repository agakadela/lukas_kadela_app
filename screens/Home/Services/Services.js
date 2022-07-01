import styles from "./services.module.css";
import cn from "classnames";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Fact from "./Fact";
import ScrollAnimation from "../../../components/ScrollAnimation";
import Card from "../../../components/Card";
import Link from "next/link";

const services = [
  {
    icon: "paint-bucket",
    title: "UI-X Design",
    subtitle:
      "Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.",
  },
  {
    icon: "plugin",
    title: "App Development",
    subtitle:
      "Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.",
  },
  {
    icon: "globe",
    title: "Web Development",
    subtitle:
      "Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.",
  },
];

const facts = [
  {
    icon: "diamond",
    number: "498k",
    title: "Subscribers",
  },
  {
    icon: "star",
    number: "300+",
    title: "Projects",
  },
  {
    icon: "heart",
    number: "400",
    title: "Websites",
  },
  {
    icon: "speed-test",
    number: "199",
    title: "Apps",
  },
];

const Services = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number="01" background="#ffbc99" />
            <TextOverlap title="Services" text="Services" />
          </div>
          <Link href="/services">
            <a className={cn("button-small", styles.button)}>View Services</a>
          </Link>
        </div>

        <div className={styles.wrapper}>
          {services.map((item, index) => (
            <ScrollAnimation>
              <Card key={index} {...item} />
            </ScrollAnimation>
          ))}
        </div>
        <div className={styles.facts_wrapper}>
          {facts.map((item, index) => (
            <ScrollAnimation key={index}>
              <Fact {...item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
