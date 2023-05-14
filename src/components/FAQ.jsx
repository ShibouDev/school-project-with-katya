import styles from "../styles/FAQ.module.css"
import { FAQData } from "../data/FAQData"
import { useState } from "react"

const FAQ = () => {
    const [open, setOpen] = useState()
    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <h2 className={styles.title}>ОТВЕТЫ</h2>
                <p className={styles.subtitle}>НА ПОПУЛЯРНЫЕ ВОПРОСЫ</p>
                    {FAQData.map((el, index) => (
                        <div className={styles.faqitem} key={index} onClick={() => setOpen(el.id)}>
                            {el.question}
                            {open === el.id && <p>{el.answer}</p>}
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default FAQ