import styles from "../styles/Headline.module.css";
import {ButtonPrimary} from "./ui/Buttons";
const Headline = () => {
  return (
    <section className={styles.headline}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>PROschool</h1>
            <p className={styles.description}>
              Подготовка к экзаменам с нуля на
              <p
                className={`${styles.description} ${styles.descriptionStrong}`}
              >
                ВЫСОКИЕ БАЛЛЫ
              </p>
            </p>
        </div>
        <div className={styles.buttonsWrapper}>
          <ButtonPrimary title="ОГЭ" />
          <ButtonPrimary title="ЕГЭ" />
        </div>
      </div>
    </section>
  );
};
export default Headline;
