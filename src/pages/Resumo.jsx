import { Link } from "react-router-dom";

function Resumo() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Resumo</h1>

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
        <section className="section">
          <div className="section-header">
            <h2>Resumo</h2>
            <Link to="/dash" className="link-arrow">Ver detalhes →</Link>
          </div>

          <div className="summary-card">
            <figure className="ring-wrap">
              <svg viewBox="0 0 90 90">
                <circle className="ring-track" cx="45" cy="45" r="38" />
                <circle className="ring-sleep" cx="45" cy="45" r="38" />
                <circle className="ring-track" cx="45" cy="45" r="28" />
                <circle className="ring-steps" cx="45" cy="45" r="28" />
                <circle className="ring-track" cx="45" cy="45" r="18" />
                <circle className="ring-exercise" cx="45" cy="45" r="18" />
              </svg>

              <div className="ring-center"></div>
            </figure>

            <ul className="ring-legend">
              <li className="l-sleep">Sono</li>
              <li className="l-steps">Passos</li>
              <li className="l-exercise">Exercícios</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="stat-grid">
            <article className="stat-card">

              <div className="stat-card-header">
                <Link to="/alimentacao" className="link-arrow"><h3>Alimentação</h3>→</Link>
              </div>
              <p className="stat-label">Hoje</p>
              <p className="stat-value">
                -- <small>kcal</small>
              </p>
              <button className="btn-pill">Camera</button>
            </article>

            <article className="stat-card">
              <div className="stat-card-header">
                <Link to="/sono" className="link-arrow"><h3>Sono</h3>→</Link>
              </div>
              <p className="stat-label">Hoje</p>
              <p className="stat-value">
                -- <small>horas</small>
              </p>
              <button className="btn-pill alert">
                Durma mais, fi!
              </button>
            </article>

            <article className="stat-card">
              <div className="stat-card-header">
                <Link to="/passos" className="link-arrow"><h3>Passos</h3>→</Link>
              </div>
              <p className="stat-label">Hoje</p>
              <p className="stat-value">--</p>
              <p className="stat-sub">Distância</p>
              <p className="stat-value" style={{ fontSize: "1.25rem" }}>
                -- km
              </p>
            </article>

            <article className="stat-card">
              <div className="stat-card-header">
                <Link to="/exercicio" className="link-arrow"><h3>Exercícios</h3>→</Link>
              </div>
              <p className="stat-label">Hoje</p>
              <p className="stat-sub">Treino</p>
              <p className="stat-value">
                -- <small>cal</small>
              </p>
            </article>

          </div>
        </section>

        <section>
          <div className="banner">
            <div className="banner-content">
              <h2>Care Plus: um conselho para viver melhor</h2>
              <p>Lembre-se que agora é um presente.</p>
              <button className="btn-outline-white">
                Conheça a campanha
              </button>
            </div>

            <div className="carousel-dots">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Dicas</h2>
            <Link to="/dicas" className="link-arrow">Ver todas →</Link>
          </div>

          <div className="tips-scroll">
            <article className="tip-card">
              <h4>Dicas de Sono</h4>
              <p>
                Para uma vida plena, dormir bem é fundamental para restaurar sua mente...
              </p>
            </article>

            <article className="tip-card">
              <h4>Dicas de Treino</h4>
              <p>
                Para que seus treinos tenham o máximo de resultado, dormir bem é crucial...
              </p>
            </article>

            <article className="tip-card">
              <h4>Dicas de Saúde</h4>
              <p>
                Pequenos hábitos diários fazem toda a diferença para sua qualidade de vida...
              </p>
            </article>
          </div>
        </section>

        <p className="tip-paragraph">
          Dormir bem restaura sua energia, praticar exercícios fortalece seu corpo e mente,
          e realizar seu exame é essencial para o monitoramento preventivo.
        </p>

      </div>
    </div>
  );
}

export default Resumo;