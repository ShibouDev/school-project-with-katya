import styles from "../styles/Headline.module.css"
const Headline = () => {
    return (
        <section class={styles.headline}>
            <div class={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 class={styles.title}>PROschool</h1>
                    <p class={styles.description}>Подготовка к ОГЭ/ЕГЭ</p>
                </div>
                <button class={`${styles.buttonMain} ${styles.buttonMainTwo}`}>Курсы</button>
            </div>
        </section>
    )
}
export default Headline