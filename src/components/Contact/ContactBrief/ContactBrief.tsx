import React from "react";
import styles from "./ContactBrief.module.scss";

const ContactBrief = (): React.ReactElement => {
  return (
    <section className={styles.brief}>
      <div className={styles.inner}>
        <div className={styles.copy} data-reveal>
          <span>Briefing</span>
          <h2>Was wir vor dem Gespräch wissen müssen</h2>
        </div>

        <form className={styles.form} data-reveal>
          <label>
            Name
            <input type="text" name="name" placeholder="Dein Name" />
          </label>
          <label>
            E-Mail
            <input type="email" name="email" placeholder="du@example.com" />
          </label>
          <label>
            Projekt
            <textarea
              name="project"
              placeholder="Reichweite, Ziel, Produktidee, Timeline"
              rows={5}
            />
          </label>
          <button type="button">Anfrage vorbereiten</button>
        </form>
      </div>
    </section>
  );
};

export default ContactBrief;
