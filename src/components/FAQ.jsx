import { useState } from "react"
import { Arrow } from "../assets/svg"
import { FAQData } from "../data/FAQData"
import styles from "../styles/FAQ.module.css"
const FAQ = () => {
    const [open, setOpen] = useState()
    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <p className={styles.subtitle}>ОТВЕТЫ НА ПОПУЛЯРНЫЕ ВОПРОСЫ</p>
                {FAQData.map((el, index) => (
                    <div className={styles.faqitem} key={index} onClick={() => {open === el.id ? setOpen() : setOpen(el.id)}}>
                        <div className={styles.faqitemContent}>
                            <p className={styles.faqitemTitle}>{el.question}</p>
                            <img src={Arrow} alt="arrow" className={open === el.id ? `${styles.faqitemSvg} ${styles.arrowReverse}` : styles.faqitemSvg} />
                        </div>
                        {open === el.id &&
                            <div className={styles.faqitemOpened}>
                                {el.answer}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FAQ