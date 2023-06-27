
import styles from "../styles/AboutItem.module.css"

const AboutItem = ({ title, description, number }) => {
    return (
        <div className={styles.aboutItem}>
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <p className={styles.number}>{number}</p>
        </div>
    )
}
export default AboutItem