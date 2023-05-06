import styles from "../styles/About.module.css"
import { OgeData } from "../data/OgeData"
import { ButtonSecondary } from './ui/Buttons'
const Oge = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>ОГЭ</h2>
                <div className={styles.ogeItemContainer}>
                    {OgeData.map((el, index) => (
                        <div className={styles.ogeItem} >
                            <div className={styles.ogeItemContainer2}>
                                <div className={styles.ogeItemHeader}>
                                    <p>{el.title}</p>
                                    <img src={el.picture} alt="" />
                                </div>
                                <div className={styles.ogeItemBody}>
                                    {(el.buttons).map((buttonTitle) => (
                                        <ButtonSecondary title={buttonTitle} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Oge