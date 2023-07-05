import Feature from "./Feature";
import arrow from "../../assets/Images/Vector.png"

import styles from "../../assets/styles/components/feature.module.scss"


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
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Feature
            title="Service"
            imageSrc={arrow}
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Feature
            title="Sécurité"
            imageSrc={arrow}
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour 
            les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. 
            En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
    )
}

export default Features