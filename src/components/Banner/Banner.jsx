
import styles from "../../assets/styles/components/banner.module.scss"


function Banner({ imageSrc, altText, text }) {
    return (
        <section>
            <div className={styles.bannerContainer}>
                <img src={imageSrc}
                    alt={altText}
                    className={styles.imageBanner}
                />
                <p className={styles.textBanner}>
                    {text}
                </p>
            </div>
        </section>
    )
}

export default Banner