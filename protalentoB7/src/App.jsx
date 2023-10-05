import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./screens/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import AboutUs from "./screens/AboutUs/AboutUs";
import Detail from "./screens/Detail/Detail";

function App() {
  return (
    <div className="app-container">
      {/* <Home /> */}
      {/* HOLA ESTOY EN APP.JSX */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<AboutUs />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
