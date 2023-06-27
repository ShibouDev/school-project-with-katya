import Headline from "../components/Headline";
import MainLayout from "../components/MainLayout";
import About from "../components/About";
import Oge from "../components/Oge";
import FAQ from "../components/FAQ";
import Adv from "../components/Adv"


const MainPage = () => {
  return (
    <>
      <MainLayout>
        <Headline/>
        <About/>
        <Adv/>
        <Oge/>
        {/* <EGE/> */}
        <FAQ/>
      </MainLayout>
    </>
  );
}
export default MainPage