
import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((group) => (
            <div className={styles.skillGroup} key={group.title}>
              <h3>{group.title}</h3>

              <div className={styles.skillGrid}>
                {group.skills.map((skill) => (
                  <div className={styles.skill} key={skill.name}>
                    <div className={styles.skillIcon}>
                      <span aria-hidden="true">
                        {skill.name === "JavaScript"
                          ? "JS"
                          : skill.name === "Node.js"
                          ? "N"
                          : skill.name === "MongoDB"
                          ? "M"
                          : skill.name === "Express"
                          ? "EX"
                          : skill.name.slice(0, 2).toUpperCase()}
                      </span>

                      <img
                        src={
                          skill.image.startsWith("http")
                            ? skill.image
                            : getImageUrl(skill.image)
                        }
                        alt={skill.name}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.history}>
          {history.map((item) => (
            <article
              className={styles.historyItem}
              key={`${item.role}-${item.organisation}`}
            >
              <div className={styles.projectIcon}>
                <span aria-hidden="true">{"</>"}</span>
                <img
                  src={getImageUrl(item.imageSrc)}
                  alt={`${item.organisation} logo`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className={styles.historyDetails}>
                <span className={styles.eyebrow}>EXPERIENCE</span>
                <h3>{item.role}</h3>
                <h4>{item.organisation}</h4>
                <p className={styles.date}>
                  {item.startDate === "Present"
                    ? "Current Projects"
                    : `${item.startDate} – ${item.endDate}`}
                </p>

                <ul>
                  {item.experiences.map((experience) => (
                    <li key={experience}>{experience}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};