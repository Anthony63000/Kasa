
import styles from "../../assets/styles/app.module.scss"

import { useParams } from 'react-router-dom';

import Header from "../../components/Header/index"
import Gallery from "../../components/Gallery/Gallery"
import Description from "../../components/Description/Description"
import Footer from "../../components/Footer/index"

import data from "../../assets/data.json"

import arrowLeft from "../../assets/Images/arrow-left.png"
import arrowRight from "../../assets/Images/arrow-right2.png"

function Logement() {

    const { id } = useParams();

    const accommodationSelected = data.find(accommodation => accommodation.id === id);

    return (
        <div className={styles.app}>
            <Header />
                <Gallery
                imageSrc = {accommodationSelected.pictures}
                altText = "Plusieurs images qui décrivent l'apprtement"
                altLeft = "Flèche qui va vers la gauche"
                altRight = "Flèche qui va vers la droite"                                
                arrowRight = {arrowRight}
                arrowLeft = {arrowLeft}
                />
            {/*<Description
            title={accommodationSelected.title}
            place={accommodationSelected.location}
            tags={accommodationSelected.tags}
            text = {accommodationSelected.description}
            name = {accommodationSelected.host.name}
            imageUrl={accommodationSelected.host.picture}
            ratings={accommodationSelected.rating}
            equipments={accommodationSelected.equipments}
    />
    <Footer />*/}
        </div>
    )
}

export default Logement