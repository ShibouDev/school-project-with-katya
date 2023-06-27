import styles from "../styles/DisciplinesItem.module.css"

const DisciplinesItem = ({ img, title, description, price, id }) => {
    return (
        <div className={styles.disciplinesItem}>
            <img src={img} alt={img} />
            <div className={styles.containerInfo}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.tooltipsAndPrice}>
                    <p className={styles.tooltip}>Узнать</p>
                    <p className={styles.price}>{price} рублей</p>
                </div>
            </div>
        </div >
    )
}
export default DisciplinesItem