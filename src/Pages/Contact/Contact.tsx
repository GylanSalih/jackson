import React, { useRef } from "react";
import ContactBrief from "../../components/Contact/ContactBrief/ContactBrief";
import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import ContactOptions from "../../components/Contact/ContactOptions/ContactOptions";
import useReveal from "../../hooks/useReveal";
import styles from "./Contact.module.scss";

const Contact = (): React.ReactElement => {
  const pageRef = useRef<HTMLDivElement>(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef} className={styles.page}>
      <ContactHero />
      <ContactOptions />
      <ContactBrief />
    </div>
  );
};

export default Contact;
