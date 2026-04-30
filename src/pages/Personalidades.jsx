import { Link } from "react-router-dom";
import styles from "../styles/index.module.css";
import "../styles/personalidadesLoja.css"
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import cowboy from "../assets/cowboy.png";
import robo from "../assets/robo.png";
import general from "../assets/militar.png";
import caipira from "../assets/caipira.png";
import gaucho from "../assets/gaucho.png";

const svg = {
  notificacao: (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
  ),
  relogio: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  lyrium: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffd700">
                    <circle cx="12" cy="12" r="10" />
                    <text x="12" y="15" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">◎</text>
                  </svg>
  ),
}

function Personalidades() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <header className={styles.appHeader}>
            <h1>Loja</h1>
            
            <div className={styles.headerActions}>
                <div className={styles.badgePoints}>
                    <span>--</span>
                    {svg.lyrium}
                </div>
            
                <button className={styles.btnIcon}>{svg.notificacao}</button>
            </div>
        </header>

        <div className={styles.nameBar}>
            <span>Nome</span>
            {svg.relogio}
        </div>

        <div className={styles.scrollContent}>

            <div className="back-button-container">
                <Link to="/loja" className="back-button" aria-label="Voltar para a loja">← Personalidades</Link>
            </div>

            <div className="section-title-container">
                <h2 className="section-title">Compre novas personalidades para o seu avatar!</h2>
            </div>

            <section className="personalities-section">
                <ul className="personalities-list" role="list">
                    <li className="personality-item" role="listitem">
                        <div className="personality-content">
                            <div className="personality-image">
                                <img src={cowboy} alt="Cowboy"></img>
                            </div>
                            <div className="personality-info">
                                <h3 className="personality-name">Cowboy</h3>
                                <p className="personality-label">Exemplares</p>
                            </div>
                        </div>
                        <div className="personality-action">
                            <p className="personality-price">800 <span>◎</span></p>
                            <button className="btn-buy" aria-label="Comprar Cowboy">Comprar</button>
                        </div>
                    </li>

                    <li className="personality-item" role="listitem">
                        <div className="personality-content">
                            <div className="personality-image">
                                <img src={robo} alt="Robô"></img>
                            </div>
                            <div className="personality-info">
                                <h3 className="personality-name">Robô</h3>
                                <p className="personality-label">Exemplares</p>
                            </div>
                        </div>
                        <div className="personality-action">
                            <p className="personality-price">800 <span>◎</span></p>
                            <button className="btn-buy" aria-label="Comprar Robô">Comprar</button>
                        </div>
                    </li>

                    <li className="personality-item" role="listitem">
                        <div className="personality-content">
                            <div className="personality-image">
                                <img src={general} alt="General"></img>
                            </div>
                            <div className="personality-info">
                                <h3 className="personality-name">Militar</h3>
                                <p className="personality-label">Exemplares</p>
                            </div>
                        </div>
                        <div className="personality-action">
                            <p className="personality-price">800 <span>◎</span></p>
                            <button className="btn-buy" aria-label="Comprar General">Comprar</button>
                        </div>
                    </li>

                    <li className="personality-item" role="listitem">
                        <div className="personality-content">
                            <div className="personality-image">
                                <img src={caipira} alt="Caipira"></img>
                            </div>
                            <div className="personality-info">
                                <h3 className="personality-name">Caipira</h3>
                                <p className="personality-label">Exemplares</p>
                            </div>
                        </div>
                        <div className="personality-action">
                            <p className="personality-price">800 <span>◎</span></p>
                            <button className="btn-buy" aria-label="Comprar Caipira">Comprar</button>
                        </div>
                    </li>

                    <li className="personality-item" role="listitem">
                        <div className="personality-content">
                            <div className="personality-image">
                                <img src={gaucho} alt="Gaúcho"></img>
                            </div>
                            <div className="personality-info">
                                <h3 className="personality-name">Gaúcho</h3>
                                <p className="personality-label">Exemplares</p>
                            </div>
                        </div>
                        <div className="personality-action">
                            <p className="personality-price">800 <span>◎</span></p>
                            <button className="btn-buy" aria-label="Comprar Gaúcho">Comprar</button>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
      <BottomNav />
    </div>
  );
}

export default Personalidades;