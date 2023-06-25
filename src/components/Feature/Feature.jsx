
import styles from "./feature.module.scss"

function Feature(title, arrow) {
    return (
        <div className={styles.featureContent}>
            <p>{}</p>
            <i>{}</i>
        </div>
    )
}

export default Feature 