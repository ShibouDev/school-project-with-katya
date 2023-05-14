import { HeaderLink } from '../data/HeaderLinkData'
import '../styles/MainLayout.module.css'
import styles from '../styles/MainLayout.module.css'
import { ButtonPrimary, ButtonSecondary } from './ui/Buttons'
const MainLayout = ({ children }) => {
    return (
        <>
            <header className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.headerMenu}>
                        <div className={styles.logoTxt}>PROschool</div>
                        <ul className={styles.menuList}>
                        {HeaderLink.map((el) => (
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href={el.href}>{el.title}</a>
                                </li>
                        ))}
                        </ul>
                        <div className={styles.tooltips}>
                            <ButtonSecondary title="Консультация" />
                            <ButtonPrimary title="Войти" />
                        </div>
                    </div>
                </div>
            </header>
            {children}
            <footer className={styles.wrapper}>
                <div className={styles.container}>
                    <p>Подписывайтесь на нашу рассылку</p>
                    <input type="email" placeholder='email' required></input>
                </div>
            </footer>
        </>
    )
}
export default MainLayout