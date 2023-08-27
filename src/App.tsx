import { Routes, Route, Link } from "react-router-dom";
import ClimaTempo from "./pages/ClimaTempo";
import BuscaEndereco from "./pages/BuscaEndereco";
import FormContato from "./pages/FormContato";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div id="container" className="flex min-w-full min-h-screen">
        <div id="main" className="w-full m-12">
          <div className="w-200 mx-9 bg-white min-h-max rounded-lg">
            <Header />
            <Routes>
              <Route path="/" element={<ClimaTempo />} />
              <Route path="/endereco" element={<BuscaEndereco />} />
              <Route path="/contato" element={<FormContato />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
