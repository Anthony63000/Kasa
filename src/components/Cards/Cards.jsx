import styles from "../../assets/styles/components/card.module.scss";
import Card from "./Card";
import data from "../../assets/data.json";

import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className={styles.cardsContainer}>
      {data.map((card, index) => (
        <Link to={`/Logement/${card.id}`} key={index} className={styles.cardLink}>
          <Card title={card.title} imageUrl={card.cover}/>
        </Link>
      ))}
    </div>
  );
}


export default Cards;
