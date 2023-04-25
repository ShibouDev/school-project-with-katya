import styles from "../styles/About.module.css"
import { AboutData } from "../data/AboutData"

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                    <h2 className={styles.title}>О школе</h2>
                    <div className={styles.aboutItemContainer}>
                        {AboutData.map((el, index) => (
                            <div className={styles.aboutItem}>
                                <p>{el.text}</p>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}
export default About