import Headline from "./components/Headline";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import Oge from "./components/Oge"
function App() {
  return (
    <div className="App">
      <MainLayout>
        <Headline/>
        <About/>
        <Oge/>
      </MainLayout>
    </div>
  );
}

export default App;
