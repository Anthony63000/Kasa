
import { useState } from "react";
import styles from "./feature.module.scss";

function Feature({ title, imageSrc, altText, text }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = () => {
    setIsRotated(!isRotated);
    toggleVisibility();
  };

  return (
    <div>
      <div className={styles.featureContent}>
        <p className={styles.featureText}>{title}</p>
        <img
          className={`${styles.featureImage} ${isRotated ? styles.arrowRotate : ""}`}
          src={imageSrc}
          alt={altText}
          onClick={handleClick}
        />
      </div>
      {isVisible && (
        <div
          className={styles.extendTextContainer}
        >
          <p className={styles.extendText}>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Feature;
