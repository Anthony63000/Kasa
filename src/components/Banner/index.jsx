
import styles from "../Banner/banner.module.scss"
import imageBanner from "../../assets/Images/imageBanner.png"

function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <img src={imageBanner}
             alt="Paysage composé de falaise avec la mer en contre-bas" 
             className={styles.imageBanner}/>
            <p className={styles.textBanner}>Chez vous, partout ailleurs</p>
        </div>
    )
}

export default Banner