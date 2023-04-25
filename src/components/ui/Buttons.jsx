import styles from '../../styles/ui/Button.module.css'
const ButtonPrimary = ({title}) => {
    return (
            <button className={styles.buttonPrimary}>{title}</button>
    )
}
const ButtonSecondary = ({title}) =>{
    return (
        <button className={styles.buttonSecondary}>{title}</button>
    )
}
export {ButtonPrimary, ButtonSecondary}
