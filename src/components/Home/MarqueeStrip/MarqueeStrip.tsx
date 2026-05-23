import React from "react";
import styles from "./MarqueeStrip.module.scss";

const items = [
  "Creator Brand Building",
  "Von Follower zu Kunden",
  "Unleashed",
  "Eigene Marke aufbauen",
  "Skalierbares Business",
];

const MarqueeStrip = (): React.ReactElement => {
  const loopItems = [...items, ...items];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {loopItems.map((item, index) => (
          <span className={styles.item} key={`${item}-${index}`}>
            {item}
            <span className={styles.separator}>*</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
