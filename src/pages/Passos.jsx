import { Link } from "react-router-dom";
import "../styles/passos.css";

function Passos() {
  return (
    <div className="app">

      <header className="app-header">
        <Link to="/resumo" className="btn-icon btn-back" aria-label="Voltar">←</Link>
        <h1>Passo &amp; Distancia</h1>
        <span className="header-spacer" aria-hidden="true"></span>
      </header>

      <main className="scroll-content">
        <section className="section tabs-section" aria-label="Período">
          <nav className="period-tabs" role="tablist">
            <button className="tab-pill tab-sm active" role="tab" aria-selected="true">D</button>
          </nav>
        </section>

        <section className="section chart-section" aria-labelledby="passos-heading">
          <div className="chart-header">
            <h2 className="chart-title" id="passos-heading">Passos</h2>
            <div className="chart-dotted" aria-hidden="true"></div>
            <span className="chart-total">--</span>
          </div>

          <div className="chart-box" aria-label="Gráfico de barras — passos">
            <div className="bar-chart" aria-hidden="true">

              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
            </div>

            <div className="chart-axis" aria-hidden="true">
              <span>--</span>
              <span>--</span>
            </div>
          </div>
        </section>

        <section className="section chart-section" aria-labelledby="distancia-heading">
          <div className="chart-header">
            <h2 className="chart-title" id="distancia-heading">Distancia</h2>
            <div className="chart-dotted" aria-hidden="true"></div>
            <span className="chart-total">-- km</span>
          </div>

          <div className="chart-box" aria-label="Gráfico de barras — distância">
            <div className="bar-chart" aria-hidden="true">

              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
              <div className="bar" style={{ "--h": "1%" }}></div>
            </div>

            <div className="chart-axis" aria-hidden="true">
              <span>--</span>
              <span>--</span>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Passos;