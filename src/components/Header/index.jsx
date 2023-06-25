
import styles from "../../assets/styles/styles.module.scss"
import Logo from "../../assets/Images/LOGO.png"
import { Link } from "react-router-dom"


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Logo de l'enseigne kasa" />
            </div>
            <nav className={styles.listContainer}>
                <Link to={"/"} className={`${styles.list} ${styles.listFirst}`}>Accueil</Link>
                <Link to={"/About"}className={`${styles.list} ${styles.listSecond}`}>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header