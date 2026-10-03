import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>

        {/* Cartoon Image */}
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Male cartoon developer"
            className={styles.aboutImage}
          />
        </div>

        {/* Written Part */}
        <ul className={styles.aboutItems}>

          {/* Frontend */}
          <li className={styles.aboutItem}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24">
                <path d="M8 8l-4 4 4 4" />
                <path d="M16 8l4 4-4 4" />
                <path d="M14 4l-4 16" />
              </svg>
            </div>

            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in
                building responsive and optimized websites
                and web applications.
              </p>
            </div>
          </li>

          {/* Backend */}
          <li className={styles.aboutItem}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24">
                <ellipse cx="12" cy="5" rx="7" ry="3" />
                <path d="M5 5v6c0 2 14 2 14 0V5" />
                <path d="M5 11v6c0 2 14 2 14 0v-6" />
              </svg>
            </div>

            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and
                optimized back-end systems and APIs.
              </p>
            </div>
          </li>

          {/* UI Designer */}
          <li className={styles.aboutItem}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18" />
                <circle cx="7" cy="6.5" r="0.8" />
                <circle cx="10" cy="6.5" r="0.8" />
                <path d="M7 17l3-3 2 2 3-4 3 5H7z" />
              </svg>
            </div>

            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages
                and have created design systems as well.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};