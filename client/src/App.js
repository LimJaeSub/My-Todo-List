import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./page/StartPage";
import MainPage from "./page/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
