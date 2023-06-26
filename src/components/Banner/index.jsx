
import styles from "../Banner/banner.module.scss"


function Banner({ imageSrc, altText, text }) {
    return (
        <div className={styles.bannerContainer}>
            <img src={imageSrc}
             alt={altText}
             className={styles.imageBanner}/>
            <p className={styles.textBanner}>{text}</p>
        </div>
    )
}

export default Banner