
import styles from "../../assets/styles/components/header.module.scss"
import Logo from "../../assets/Images/LOGO.png"
import { NavLink } from "react-router-dom"


function Header() {
    
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.image} src={Logo} alt="Logo de l'enseigne kasa" />
            </div>
            <nav className={styles.listContainer}>
            <NavLink 
            to={"/"} 
            className={({isActive}) => 
            (isActive ? `${styles.list} ${styles.listFirst} ${styles.activeLink}` 
            : 
            `${styles.list} ${styles.listFirst}`)}>
                Accueil
            </NavLink>
            <NavLink 
            to={"/About"}
            className={({isActive}) => 
            (isActive ? `${styles.list} ${styles.listSecond} ${styles.activeLink}` 
            : 
            `${styles.list} ${styles.listSecond}`)}>
                A Propos
            </NavLink>
            </nav>
        </div>
    )
}

export default Header