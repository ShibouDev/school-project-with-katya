import styles from "../styles/AdvItem.module.css"

const AdvItem = ({ img, title, description, link }) => {
    return (
        <div className={styles.advItem}>
            <div className={styles.info}>
                <img className={styles.advimg} src={img} alt="" />
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <a href={link} className={styles.link}>Узнать</a>
        </div>
    )
}
export default AdvItem