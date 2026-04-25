import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resumo from "./pages/Resumo";
import Alimentacao from "./pages/Alimentacao";
import Sono from "./pages/Sono";
import Passos from "./pages/Passos";
import Exercicio from "./pages/Exercicio";
import Avatar from "./pages/Avatar";
import Loja from "./pages/Loja";
import Dash from "./pages/Dash";
import Dicas from "./pages/Dicas";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/sono" element={<Sono />} />
        <Route path="/passos" element={<Passos />} />
        <Route path="/exercicio" element={<Exercicio />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
    </Router>
  );
}

export default App;