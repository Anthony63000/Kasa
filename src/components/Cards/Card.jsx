
import styles from "../../assets/styles/components/card.module.scss"

function Card({title, imageUrl}) {
    return (
        <article>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <img className={styles.image} 
                        src={imageUrl} 
                        alt="" 
                    />
                </div>
                <div className={styles.cardTextContainer}>
                    <h3 className={styles.cardText}>
                        {title}
                    </h3>
                </div>
            </div>
        </article>
    )
}

export default Card