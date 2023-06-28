import styles from "./gallery.module.scss"

function Gallery({imageSrc, altText, arrowLeft, arrowRight, altRight, altLeft}) {
    return (
        <div className={styles.galleryContainer}>
            <img className={`${styles.arrowLeft} ${styles.arrow}`} src={arrowLeft} alt={altLeft} />
            <img className={styles.image} src={imageSrc} alt={altText} />
            <img className={`${styles.arrowRight} ${styles.arrow}`} src={arrowRight} alt={altRight}/>
        </div>
    )
}

export default Gallery