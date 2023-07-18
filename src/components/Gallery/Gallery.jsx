import { useState } from "react"

import styles from "../../assets/styles/components/gallery.module.scss"

function Gallery({imageSrc, altText, arrowLeft, arrowRight, altRight, altLeft}) {

    const [imageIndex, setImageIndex] = useState(0);
    const totalImage = imageSrc.length;

    const handlePreviousImage = () => {
        setImageIndex((PrevIndex) => (PrevIndex === 0 ? totalImage - 1 : PrevIndex - 1));
    };

    const handleNextImage = () => {
        setImageIndex((PrevIndex) => (PrevIndex === totalImage - 1 ? 0 : PrevIndex + 1));
    };

    const position = imageIndex + 1 

    return (
        <section>
            <div className={styles.galleryContainer}>
                {totalImage > 1 && (
                <img 
                    className={`${styles.arrowLeft} ${styles.arrow}`} 
                    src={arrowLeft} alt={altLeft} 
                    onClick={handlePreviousImage}
                />
                )}
                <img 
                    className={styles.image} 
                    src={imageSrc[imageIndex]} 
                    alt={altText} 
                />
                {totalImage > 1 && (
                <p 
                    className={styles.indicator}>
                    {position}/{totalImage}
                </p>
                )}
                {totalImage > 1 && (
                <img 
                    className={`${styles.arrowRight} ${styles.arrow}`} 
                    src={arrowRight} 
                    alt={altRight}
                    onClick={handleNextImage}
                />
                )}
            </div>
        </section>
    )
}

export default Gallery