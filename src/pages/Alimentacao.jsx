function Alimentacao() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Alimentação</h1>

        <div className="header-actions">
          <div className="badge-points">
            <span>--</span>
            <span className="dot"></span>
          </div>

          <button className="btn-icon">🔔</button>
        </div>
      </header>

      <div className="name-bar">
        <span>Nome</span>
      </div>

      <div className="scroll-content">
        
      </div>
    </div>
  );
}

export default Alimentacao;