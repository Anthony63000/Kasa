
import Header from "../../components/Header/index"
import Banner from "../../components/Banner/index"
import Cards from "../../components/Cards/Cards"
import Footer from "../../components/Footer";

import imageBanner from "../../assets/Images/imageBanner.png"

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner 
      imageSrc={imageBanner}
      altText="Image d'une falaise avce l'océan en contre-bas"
      text="Chez vous, partout et ailleurs"
      />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
