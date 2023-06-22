import { useState } from 'react'
import { HeaderLink } from '../data/HeaderLinkData'
import '../styles/MainLayout.module.css'
import styles from '../styles/MainLayout.module.css'
import { deleteToken, getToken } from '../utils/Cookies'
import { ButtonPrimary, ButtonSecondary } from './ui/Buttons'
import ModalAuth from './ui/Modal'
const MainLayout = ({ children }) => {
    const AuthToken = getToken()
    const Logout = () => {
        deleteToken()
        window.location.reload();
    }
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <header className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.headerMenu}>
                        <a href='/' className={styles.logoTxt}>PROschool</a>
                        <ul className={styles.menuList}>
                            {HeaderLink.map((el) => (
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href={el.href}>{el.title}</a>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.tooltips}>
                            <div className={styles.tooltip} onClick={() => setOpenModal(true)}>
                                <ButtonSecondary title="Регистрация" />
                            </div>
                            <div className={styles.tooltip} onClick={() => !AuthToken ? setOpenModal(true) : Logout()}>
                                {!AuthToken ?
                                    <ButtonPrimary title="Войти" />
                                    :
                                    <ButtonPrimary title="Выйти" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {children}
            <footer className={styles.wrapper}>
                <div className={`${styles.container} ${styles.footerContainer}`}>
                    <div className={styles.col}>
                                <p>PROschool</p>
                                <nav>
                                    <a href="">Договор оферты</a>
                                    <a href="">Политика конфиденциальности</a>
                                    <a href="">Согласие на обработку персональных данных</a>
                                </nav>
                    </div>
                    <div className={styles.col}>
                                <p>Подписаться на новости</p>
                                <input type="email" placeholder='email' required></input>
                                <p className={styles.email}>proschool@gmail.com</p>
                                <p className={styles.phone}> +7 (910) 111 11 11</p>
                    </div>
                </div>
            </footer>
            {openModal &&
                <ModalAuth onClose={() => setOpenModal(false)} title="Вход" />
            }

        </>
    )
}
export default MainLayout