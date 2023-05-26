import { Vector } from "../assets/svg";
import styles from "../styles/Headline.module.css";
import { ButtonPrimary, ButtonSecondary } from "./ui/Buttons";

const Headline = () => {
    return (
        <section className={styles.headline}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Готовься к экзаменам быстро и легко с PROschool!</h1>
                    <img src={Vector} alt="" className={styles.vectorSvg} />
                    <p className={styles.description}>
                        Подготовиться с нами к экзаменам — просто! Вы можете записаться на занятия с любым уровнем знаний и быть уверенным в том, что занятия пройдут максимально продуктивно!
                    </p>
                </div>
                <div className={styles.buttonsWrapper}>
                    <ButtonPrimary title="ОГЭ" />
                    <ButtonPrimary title="ЕГЭ" />
                    <ButtonSecondary title="Пробный экзамен" itsHeadline={true} />
                </div>
            </div>
        </section>
    );
};
export default Headline;
