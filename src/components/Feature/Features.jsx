import Feature from "./index";
import arrow from "../../assets/Images/Vector.png"

import styles from "./feature.module.scss"


function Features() {
    return (
        <div className={styles.featuresContainer}>
            <Feature
            title="Fiabilité"
            imageSrc={arrow}
            text="Les annonces postées sur Kasa garantissent une fiablité totale. Les photos
            sont conformes aux logements, et toutes les informations sont régulièrement vérifiées
            par nos équipes."
            />
            <Feature
            title="Respect"
            imageSrc={arrow}
            />
            <Feature
            title="Service"
            imageSrc={arrow}
            />
            <Feature
            title="Sécurité"
            imageSrc={arrow}
            />
        </div>
    )
}

export default Features