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
                <div className={styles.container}>
                    <p>Подписывайтесь на нашу рассылку</p>
                    <input type="email" placeholder='email' required></input>
                </div>
            </footer>
            {openModal &&
                <ModalAuth onClose={() => setOpenModal(false)} title="Вход" />
            }

        </>
    )
}
export default MainLayout