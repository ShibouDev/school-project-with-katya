import About from "../components/About";
import Adv from "../components/Adv";
import FAQ from "../components/FAQ";
import Headline from "../components/Headline";
import MainLayout from "../components/MainLayout";
import Oge from "../components/Oge";
import styles from "../styles/pages/index.module.css";


const MainPage = () => {
  return (
    <>
      <MainLayout>
        <Headline />
        <div className={styles.aboutAndAdv}>
          <About />
          <Adv />
        </div>
        <Oge />
        {/* <EGE/> */}
        <FAQ />
      </MainLayout>
    </>
  );
}
export default MainPage