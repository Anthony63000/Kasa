
import styles from "../../assets/styles/app.module.scss"

import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Cards from "../../components/Cards/Cards"
import Footer from "../../components/Footer/Footer";

import imageBanner from "../../assets/Images/imageBanner.png"

function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Banner 
        imageSrc={imageBanner}
        altText="Image d'une falaise avce l'océan en contre-bas"
        text="Chez vous, partout et ailleurs"
        />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
