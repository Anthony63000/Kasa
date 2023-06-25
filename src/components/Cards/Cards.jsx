import styles from "../Cards/card.module.scss"
import Card from "./index"

function Cards() {
    return (
        <div className={styles.cardsContainer}>
            <Card title = "Card 1"/> 
            <Card title = "Card 2"/>   
            <Card title = "Card 3"/>   
            <Card title = "Card 4"/>   
            <Card title = "Card 5"/>   
            <Card title = "Card 6"/>     
        </div>
    )
}

export default Cards