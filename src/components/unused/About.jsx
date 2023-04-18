import styles from "../styles/About.module.css"
import { AboutData } from "../data/AboutData"

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.gridContainer}>
                    {AboutData.map((el, index) => (
                        index !== 1 ?
                            <>
                                <div className={styles.aboutItem} key={index}>
                                    <img src={el.img} alt="" />
                                </div>
                                <div className={styles.aboutItem} key={index}>
                                    <p>{el.text}</p>
                                </div>
                            </>

                            :
                            <>

                                <div className={styles.aboutItem} key={index}>
                                    <p>{el.text}</p>
                                </div>
                                <div className={styles.aboutItem} key={index}>
                                    <img src={el.img} alt="" />
                                </div>
                            </>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default About