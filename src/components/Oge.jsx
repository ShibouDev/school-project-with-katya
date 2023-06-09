import { OgeData } from "../data/OgeData"
import styles from "../styles/Oge.module.css"
const Oge = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title2}>ОГЭ</h2>
                    <div className={styles.ogeItemContainer}>
                        {OgeData.map((el, index) => (
                            <div className={styles.item} key={index}>
                                <div className={styles.ogeItemContainer2}>
                                    <div className={styles.ogeItemHeader}>
                                        <p className={styles.ogeItemHeaderText}>{el.title}</p>
                                    </div>
                                    <div className={styles.ogeItemBody}>
                                        {(el.buttons).map((buttonTitle) => (
                                            <a href="/" className={styles.link}>{buttonTitle}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Oge