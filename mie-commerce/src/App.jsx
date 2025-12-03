import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import CatalogoContainer from "./components/CatalogoContainer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<CatalogoContainer />} />
          <Route path="/Categorias" element={<h2>Categorias</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
