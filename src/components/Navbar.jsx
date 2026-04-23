import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        
        <div className="text-white text-xl font-bold">
          MeuApp
        </div>
        <div className="flex space-x-6">
          <Link
            to="/" // Define o destino do link como a página inicial
            className={`px-3 py-2 rounded transition-colors ${
              // Verifica se o link está ativo e aplica estilos diferentes
              isActive('/') 
                ? 'bg-blue-600 text-white' // Cor de fundo azul se o link estiver ativo
                : 'text-gray-300 hover:text-white hover:bg-gray-700' // Estilo normal para o link
            }`}
          >Home</Link>
          <Link to="/resumo">resumo</Link>
          <Link to="/avatar">avatar</Link>
          <Link to="/loja">Loja</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;