import Headline from "./components/Headline";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <Headline/>
        <About/>
      </MainLayout>
    </div>
  );
}

export default App;
