import styles from "../../assets/styles/app.module.scss"

import style from "../../assets/styles/components/banner.module.scss"

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner"
import Features from "../../components/Feature/Features";
import Footer from "../../components/Footer/Footer"

import imageBanner from "../../assets/Images/Image source 2 (1).png"


function About() {
    return (
        <div className={`${styles.app} ${style.about}`}>
            <Header />
            <main>
                <Banner 
                    imageSrc={imageBanner}
                    altText="Paysage composé de montagne et d'un fleuve en contre-bas avec une forêt en premier plan"
                />
                <Features />
            </main>
            <Footer />
        </div>
    );
}

export default About