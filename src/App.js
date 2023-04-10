import Headline from "./components/Headline";
import MainLayout from "./components/MainLayout";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <Headline />
      </MainLayout>
    </div>
  );
}

export default App;
