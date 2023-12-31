
import styles from "../../assets/styles/components/footer.module.scss"
import Logo from "../../assets/Images/LOGO (1).png"

function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.contentContainer}>
                    <img className={styles.footerImage} 
                        src={Logo} 
                        alt="Logo de l'entreprise Kasa" 
                    />
                    <p className={styles.footerText}>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 