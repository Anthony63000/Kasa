
import styles from "../../assets/styles/app.module.scss"

import Header from "../../components/Header/Header"
import ErrorContent from "../../components/Error/Error"
import Footer from "../../components/Footer/Footer"

function Error() {
    return (
        <div className={styles.app}>
            <Header />
            <main>
                <ErrorContent />
            </main>
            <Footer />
        </div>
    )
}

export default Error