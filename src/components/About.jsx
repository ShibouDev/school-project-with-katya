import { AboutItemData } from "../data/AboutItemData"
import styles from "../styles/About.module.css"
import AboutItem from "./AboutItem"

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                    <h2 className={styles.title}>ПРОЦЕСС ОБУЧЕНИЯ</h2>
                    <div className={styles.aboutItemContainer}>
                        {AboutItemData.map((el, index) => (
                            <AboutItem title={el.title} description={el.description} number={`0${index+1}`}/>
                        ))}
                    </div>
            </div>
        </section>
    )
}
export default About