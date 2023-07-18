
import styles from "../../assets/styles/components/error.module.scss"
import { NavLink } from "react-router-dom"

function ErrorContent() {
    return (
        <section>
            <div className={styles.errorContainer}>
                <h1 className={styles.title}>
                    404
                </h1>
                <p className={styles.text}>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink className={styles.link} 
                    to={"/Home"}>
                        Retourner sur la page d'accueil
                </NavLink>
            </div>
        </section>
    )
}

export default ErrorContent