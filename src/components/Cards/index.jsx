
import styles from "./card.module.scss"

function Card({title, imageUrl}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImage}>
                <img className={styles.image} src={imageUrl} alt="" />
            </div>
            <div className={styles.cardText}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card