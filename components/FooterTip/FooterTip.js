import cn from "classnames";
import styles from "./footertip.module.css";

const FooterTip = () => {
  return (
    <div className={cn("container", styles.container)}>
      <p className={cn("caption", styles.title)}>
        Copyright © 2022 - React Theme by{" "}
        <a
          href="https://uriostegui.vercel.app"
          target="_blank"
          rel="noreferrer"
          className={cn("caption-bold", styles.author)}
        >
          Angel Uriostegui
        </a>
      </p>
      <p className={cn("caption")}>Terms & Conditions | Privacy Policy </p>
    </div>
  );
};

export default FooterTip;
