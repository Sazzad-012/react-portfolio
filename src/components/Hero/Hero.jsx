
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Md. Sazzad Rashid Chowdhury
        </h1>

        <h2 className={styles.subtitle}>
          MERN Stack Developer
        </h2>

        <p className={styles.description}>
          I'm a passionate MERN Stack Developer who enjoys
          building modern, responsive, and user-friendly web
          applications. I love solving problems, learning
          new technologies, and turning creative ideas into
          real-world digital experiences.
        </p>

        <a
          href="mailto:sazzadrashid890@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroCircle.png")}
        alt="Md. Sazzad Rashid Chowdhury"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
