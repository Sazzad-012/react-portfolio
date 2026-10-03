
import React from "react";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">

      <div className={styles.header}>
        <p className={styles.eyebrow}>
          MY RECENT WORK
        </p>

        <h2 className={styles.title}>
          Featured Project
        </h2>

        <p className={styles.subtitle}>
          A look at what I've been building with modern
          web technologies.
        </p>
      </div>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            project={project}
            featured={id === 0}
          />
        ))}
      </div>

    </section>
  );
};
