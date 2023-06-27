import { AdvItemData } from "../data/AdvItemData"
import styles from "../styles/Adv.module.css"
import AdvItem from "./AdvItem"

const Adv = () => {
    return (
        <section className={styles.adv}>
            <div className={styles.container}>
                    <h2 className={styles.title}>НАШИ ПРЕИМУЩЕСТВА</h2>
                    <div className={styles.advItemContainer}>
                        {AdvItemData.map((el, index) => (
                            <AdvItem img={el.img} title={el.title} description={el.description} link={el.link}/>
                        ))}
                    </div>
            </div>
        </section>
    )
}
export default Adv