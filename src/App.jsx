import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resumo from './pages/Resumo';
import Avatar from './pages/Avatar';
import Loja from './pages/Loja';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resumo" element={<Resumo/>}/>
            <Route path="/avatar" element={<Avatar/>}/>
            <Route path="/loja" element={<Loja/>}/>
          </Routes>
        </div>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;