import Headline from "./components/Headline";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import Oge from "./components/Oge"
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Headline/>
        <About/>
        <Oge/>
        {/* <EGE/> */}
        <FAQ/>
      </MainLayout>
    </div>
  );
}

export default App;
