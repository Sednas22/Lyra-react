import { NavLink } from "react-router-dom";
import "../styles/index.css"

function Navbar() {
  return (
    <>
      <aside className="desktop-sidebar">
        <div className="sidebar-logo">LYRA</div>

        <nav className="sidebar-nav">
          <NavLink to="/" className="sidebar-link">Início</NavLink>
          <NavLink to="/resumo" className="sidebar-link">Resumo</NavLink>
          <NavLink to="/resumo/alimentacao" className="sidebar-link">Alimentação</NavLink>
          <NavLink to="/resumo/sono" className="sidebar-link">Sono</NavLink>
          <NavLink to="/resumo/passos" className="sidebar-link">Passos</NavLink>
          <NavLink to="/resumo/exercicio" className="sidebar-link">Exercícios</NavLink>
          <NavLink to="/avatar" className="sidebar-link">Avatar</NavLink>
          <NavLink to="/loja" className="sidebar-link">Loja</NavLink>
        </nav>

        <div className="sidebar-badge">
          <span className="dot"></span>
          <span>-- pontos</span>
        </div>
      </aside>

      <nav className="bottom-nav">
        <NavLink to="/" className="nav-item">Início</NavLink>
        <NavLink to="/resumo" className="nav-item">Resumo</NavLink>
        <NavLink to="/avatar" className="nav-item">Avatar</NavLink>
        <NavLink to="/loja" className="nav-item">Loja</NavLink>
      </nav>
    </>
  );
}

export default Navbar;