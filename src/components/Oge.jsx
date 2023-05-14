import styles from "../styles/Oge.module.css"
import { OgeData } from "../data/OgeData"
import { ButtonSecondary } from './ui/Buttons'
const Oge = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                <h2 className={styles.title2}>ОГЭ</h2>
                <div className={styles.ogeItemContainer}>
                    {OgeData.map((el, index) => (
                        <div className={index === 1 ? styles.ogeItemBlue : index === 2 ? styles.ogeItemBlue : styles.ogeItemPurple} key={index}>
                            <div className={styles.ogeItemContainer2}>
                                <div className={styles.ogeItemHeader}>
                                    <p className={styles.ogeItemHeaderText}>{el.title}</p>
                                    <img className={styles.ogeItemHeaderImg} src={el.picture} alt="" />
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
            </div>
        </section>
    )
}
export default Oge