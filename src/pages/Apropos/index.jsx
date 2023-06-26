import Header from "../../components/Header";
import Banner from "../../components/Banner"
import Features from "../../components/Feature/Features";
import Footer from "../../components/Footer/index"

import imageBanner from "../../assets/Images/Image source 2 (1).png"


function About() {
    return (
        <div>
            <Header />
            <Banner 
            imageSrc={imageBanner}
            altText="Paysage composé de montagne et d'un fleuve en contre-bas avec une forêt en premier plan"
            />
            <Features />
            <Footer />
        </div>
    );
}

export default About