
import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>

      {/* Project Image */}
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(project.imageSrc)}
          alt={`${project.title} project preview`}
          className={styles.image}
        />

        <span className={styles.imageLabel}>
          FEATURED PROJECT
        </span>
      </div>

      {/* Project Details */}
      <div className={styles.content}>

        <div className={styles.projectHeading}>
          <span className={styles.number}>
            01 / PROJECT
          </span>

          <h3 className={styles.title}>
            {project.title}
          </h3>
        </div>

        <p className={styles.description}>
          {project.description}
        </p>

        <div className={styles.techSection}>
          <h4>TECHNOLOGIES USED</h4>

          <ul className={styles.skills}>
            {project.skills.map((skill, index) => (
              <li key={index} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>

          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceBtn}
          >
            <span>Source Code</span>
            <span className={styles.arrow}>↗</span>
          </a>
        </div>

      </div>
    </article>
  );
};
