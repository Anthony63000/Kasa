
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
        <div>
            <Header />
                <Gallery
                imageSrc = {accommodationSelected.cover}
                altText = "Image d'un"
                altLeft = "coucou"
                altRight = "coucou"
                arrowRight = {arrowRight}
                arrowLeft = {arrowLeft}
                />
            <Description
            title={accommodationSelected.title}
            place={accommodationSelected.location}
            tags={accommodationSelected.tags}
            text = {accommodationSelected.description}
            />
            <Footer />
        </div>
    )
}

export default Logement