import styles from "./description.module.scss"
import arrow from "../../assets/Images/Vector.png"


import Feature from "../Feature/index"

function Description({title, place, tags, text}) {


    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.textLocation}>{place}</p>
                <div className={styles.tagContainer}>
                    {tags.map((tag, index) => (
                        <p key={index} className={styles.tag}>{tag}</p>
                    ))}
                </div>
                    <Feature 
                    className={styles.featureLeft}
                    title="Description"
                    imageSrc={arrow}
                    text={text}
                    />
            </div>
        </div>
    )
}

export default Description