import styles from '../../styles/ui/Button.module.css'
const ButtonPrimary = ({title}) => {
    return (
            <button className={styles.button}>{title}</button>
    )
}
export default ButtonPrimary