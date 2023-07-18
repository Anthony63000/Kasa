
import { useState } from "react";
import styles from "../../assets/styles/components/feature.module.scss";

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
      setAnimate(false);
      const timer = setTimeout(() => {
        toggleVisibility();
      }, 250);
      return () => {
        clearTimeout(timer);
      };
    } else {
      toggleVisibility();
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 250); 
      return () => {
        clearTimeout(timer);
      };
    }
  };

  const extendTextContainerClass = `${styles.extendTextContainer} ${animate ? styles.show : ""}`;

  return (
      <div className={styles.container}>
        <div className={styles.featureContent}>
          <h3 className={styles.featureText}>{title}</h3>
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
