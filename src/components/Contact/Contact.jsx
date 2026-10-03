
import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">

      {/* Contact Information */}
      <div className={styles.text}>
        <h2>Let's Work Together</h2>

        <p>
          Have a project idea or want to connect?
          <br />
          Feel free to reach out!
        </p>

        <a
          className={styles.email}
          href="mailto:sazzadrashid890@gmail.com"
        >
          sazzadrashid890@gmail.com
        </a>
      </div>

      {/* Social Links and Copyright */}
      <div className={styles.right}>

        <div className={styles.links}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sazzadrashid890@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Email Me
          </a>

          <a
            href="https://github.com/Sazzad-012"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sazzad-rashid-681919293"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Md. Sazzad Rashid Chowdhury.
          <br />
          All rights reserved.
        </p>

      </div>
    </footer>
  );
};
