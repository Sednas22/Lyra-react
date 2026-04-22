import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'; 
import Home from './pages/Home';
import Resumo from './pages/Resumo';
import Loja from './pages/Loja';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Menu/>
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resumo" element={<Resumo/>}/>
            <Route path="/loja" element={<Loja/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;