import styles from '../../styles/ui/Button.module.css'
const ButtonPrimary = ({title, circle}) => {
    return (
            <button className={styles.buttonPrimary} style={circle && {borderRadius: '999px'}}>{title}</button>
    )
}
const ButtonSecondary = ({title, itsHeadline}) =>{
    return (
        <button className={itsHeadline ? `${styles.buttonSecondary} ${styles.ml15}` : styles.buttonSecondary}>{title}</button>
    )
}

export { ButtonPrimary, ButtonSecondary }

