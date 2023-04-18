import styles from "../styles/Headline.module.css";
import ButtonPrimary from "./ui/Buttons"
const Headline = () => {
    return (
        <section className={styles.headline}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>PROschool</h1>
                    <p className={styles.description}>Подготовка к ОГЭ/ЕГЭ</p>
                </div>
                <div className={styles.buttonsWrapper}>
                    <ButtonPrimary title="ОГЭ"/>
                </div>
            </div>
        </section>
    )
}
export default Headline