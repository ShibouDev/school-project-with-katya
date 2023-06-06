import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/ui/Modal.module.css";
import { instanceDontAuth } from "../../utils/AxiosInstance";
import { SetToken } from "../../utils/Cookies";
import { ButtonPrimary, ButtonSecondary } from './Buttons';
const ModalAuth = ({ onClose, title, desc }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [err, setErr] = useState('')
    const { register, handleSubmit, formState: { errors }, formState } = useForm({
        mode: 'onSubmit',
    });
    const Submit = async () => {
        try {
            const { data } = await instanceDontAuth.post('auth/login', {
                email,
                password
            })
            SetToken('accessToken', data.token)
            onClose()
            window.location.reload();
        } catch(err) {
            setErr('Неверный логин или пароль')
        }
    }
    return (
        <div className={styles.modal}
        >
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.modalTitle}>{title}</h4>
                    <span className={styles.tooltipClosed} onClick={onClose}>
                        <ButtonPrimary title="X" circle />
                    </span>
                </div>
                <div className={styles.modalBody}>
                    <form onSubmit={handleSubmit(Submit)} className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <input className={styles.input}
                                {...register("email", { required: true })}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email" />
                            {!err && errors.email?.type === 'required' && (
                                <p className={styles.error}>Поле обязательно для заполнения</p>
                            )}
                        </div>
                        <div className={styles.inputContainer}>
                            <input className={styles.input}
                                {...register("password", { required: true })}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password" />
                            {!err && errors.password?.type === 'required' && (
                                <p className={styles.error}>Поле обязательно для заполнения</p>
                            )}
                        </div>
                        {err &&
                            <p className={styles.error}>{err}</p>
                        }
                        <div className={styles.buttonSubmit}>
                            <ButtonSecondary title="Войти" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModalAuth