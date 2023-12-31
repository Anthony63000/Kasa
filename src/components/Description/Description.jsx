import styles from "../../assets/styles/components/description.module.scss";
import arrow from "../../assets/Images/Vector.png";
import style from "../../assets/styles/components/feature.module.scss"

import Feature from "../Feature/Feature";

function Description({ title, place, tags, text, name, imageUrl, altText, ratings, equipments }) {
  
  const fullName = name;
  const splitName = fullName.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[1];

  // Fonction pour générer les étoiles
  const renderStars = () => {
    const filledStars = parseInt(ratings);
    const emptyStars = 5 - filledStars;

    const stars = [];

    // Générer les étoiles pleines
    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={i} className={`${styles.stars} fa-solid fa-star`}></i>);
    }

    // Générer les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={filledStars + i} className={`${styles.starsEmpty} ${styles.stars} fa-solid fa-star `}></i>);
    }

    return stars;
  };

  return (
    <section>
      <div className={`${styles.container} ${style.accomodation}`}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.textLocation}>
            {place}
          </p>
          <div className={styles.tagContainer}>
            {tags.map((tag, index) => (
              <p key={index} className={styles.tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.owner}>
            <p className={styles.name}>
              <span>{firstName}</span>
              <br />
              <span>{lastName}</span>
            </p>
            <img className={styles.image} 
              src={imageUrl} 
              alt={altText} 
            />
          </div>
          <div className={styles.rating}>
            {renderStars()}
          </div>
        </div>
        <div className={styles.featureContainer}>
          <Feature 
              title="Description" 
              imageSrc={arrow} 
              text={text} 
          />
          <Feature 
              title="Equipements" 
              imageSrc={arrow} 
              equipments ={equipments.map((equipement, index) => (
                <span key={index} 
                  className={styles.equipment}
                >
                  {equipement}
                </span>
              ))}
          />
        </div>
      </div>
    </section>
  );
}

export default Description;

