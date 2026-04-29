import { Link } from "react-router-dom";
import "../styles/exercicio.css";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

const svg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-mid)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2" />
                  <path d="M6.5 6.5a6 6 0 0 0 0 11" />
                  <path d="M17.5 6.5a6 6 0 0 1 0 11" />
                  <line x1="4" y1="12" x2="7" y2="12" />
                  <line x1="17" y1="12" x2="20" y2="12" />
                </svg>;

function Exercicio() {
  return (
    <div className="app">
      <Sidebar />
      <header className="app-header">
        <Link to="/resumo" className="btn-icon btn-back" aria-label="Voltar">←</Link>
        <h1>Exercício</h1>
        <span className="header-spacer" aria-hidden="true"></span>
      </header>

      <main className="scroll-content">
        <section className="section month-section" aria-labelledby="nov-heading">
          <h2 className="month-heading" id="nov-heading">novembro 2025</h2>

          <ul className="exercise-list" role="list">

            <li className="exercise-item" role="listitem">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

            <li className="exercise-item" role="listitem">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

            <li className="exercise-item" role="listitem">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

            <li className="exercise-item" role="listitem">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

          </ul>
        </section>

        <section className="section month-section" aria-labelledby="oct-heading">
          <h2 className="month-heading" id="oct-heading">outubro 2025</h2>

          <ul className="exercise-list" role="list">

            <li className="exercise-item">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

            <li className="exercise-item">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

            <li className="exercise-item">
              <div className="ex-thumb">
                {svg}
              </div>

              <div className="ex-info">
                <p className="ex-name">Treino Tradicional de Força</p>
                <strong className="ex-cal">-- CAL</strong>
              </div>
            </li>

          </ul>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

export default Exercicio;