import { Link } from "react-router-dom";
import "../styles/sono.css";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

function Sono() {
  return (
    
    <div className="app">
      <Sidebar />
      <header className="app-header">
        <Link to="/resumo" className="btn-icon btn-back">←</Link>
        <h1>Sono</h1>
        <span className="header-spacer"></span>
      </header>

      <main className="scroll-content">

        <section className="section quality-section">
          <h2 className="quality-heading">
            Qualidade de Sono
          </h2>

          <span className="quality-badge">
            Moderado
          </span>
        </section>

        <section className="section history-section">
          <h2 className="history-heading">
            Últimos 12 Meses
          </h2>

          <div className="sleep-row">
            <div className="sleep-row-label">
              <span className="sleep-icon">🛏️</span>
              <span className="sleep-row-title">Sono</span>
            </div>

            <span className="arrow-icon">→</span>
          </div>

          <div className="sleep-time-block">
            <span className="sleep-time-label">
              Tempo Dormindo
            </span>

            <div className="sleep-time-value">
              <strong>--</strong>
              <span className="sleep-unit">h</span>
              <strong>--</strong>
              <span className="sleep-unit">min</span>
            </div>
          </div>
        </section>

        <section className="section article-section">
          <article className="sleep-article">

            <div className="article-img-wrap">
              <div className="cloud-art">
                <div className="cloud"></div>
                <span className="zzz">z z z</span>
              </div>
            </div>

            <div className="article-body">
              <h3 className="article-title">
                Avalie se você está dormindo bem
              </h3>

              <p className="article-desc">
                Como dormir o necessário e por que isso é importante
              </p>
            </div>

          </article>
        </section>

      </main>
      <BottomNav/>
    </div>
  );
}

export default Sono;