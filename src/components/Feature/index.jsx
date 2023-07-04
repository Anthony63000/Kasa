
import { useState } from "react";
import styles from "./feature.module.scss";

function Feature({ title, imageSrc, altText, text, equipments }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = () => {
    setIsRotated(!isRotated);
    if (isVisible) {
      // Animation de disparition
      setAnimate(false);
      const timer = setTimeout(() => {
        toggleVisibility();
      }, 250); // Temps de transition de l'animation de disparition
      return () => {
        clearTimeout(timer);
      };
    } else {
      // Animation d'apparition
      toggleVisibility();
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 100); // Temps de transition de l'animation d'apparition
      return () => {
        clearTimeout(timer);
      };
    }
  };

  const extendTextContainerClass = `${styles.extendTextContainer} ${animate ? styles.show : ""}`;

  return (
    <div className={styles.container}>
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
        <div className={extendTextContainerClass}>
          <p className={styles.extendText}>{text}{equipments}</p>
        </div>
      )}
    </div>
  );
}


export default Feature;
