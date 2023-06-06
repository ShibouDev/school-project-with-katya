import MainPage from "./pages/index"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DisciplinesPage from "./pages/disciplines";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/disciplines" element={<DisciplinesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
