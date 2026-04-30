import { Link } from "react-router-dom";
import styles from "../styles/index.module.css";
import "../styles/tagsLoja.css"
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import navegador from "../assets/tag1.png";
import arquiteto from "../assets/tag2.png";
import mestre from "../assets/tag3.png";
import maratonista from "../assets/tag4.png";
import guardiao from "../assets/tag5.png";

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

function Tags() {
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
                  
            <header className={styles.desktopHeader}>
                    <h1>Loja</h1>
            
                    <div className={styles.headerActions}>
                      <div className={styles.desktopUserPill}>
                        <span>Nome</span>
                        {svg.relogio}
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
                <Link to="/loja" className="back-button" aria-label="Voltar para a loja">← Tags</Link>
            </div>

            <main className="tags-store">
                <section className="rarity-section" aria-labelledby="raras-title">
                    <h2 id="raras-title" className="rarity-title">Raras</h2>

                    <ul className="tags-grid" role="list">
                        <li className="tag-item">
                            <article className="tag-card">
                                <img src={guardiao} alt="Guardião do coração"></img>
                                <div className="tag-content">
                                    <p className="tag-price">1500 <span>{svg.lyrium}</span></p>
                                    <button className="btn-buy-tag" type="button">Comprar</button>
                                </div>
                            </article>
                        </li>

                        <li className="tag-item">
                            <article className="tag-card">
                                <img src={maratonista} alt="Maratonista"></img>
                                <div className="tag-content">
                                    <p className="tag-price">1500 <span>{svg.lyrium}</span></p>
                                    <button className="btn-buy-tag" type="button">Comprar</button>
                                </div>
                            </article>
                        </li>
                    </ul>
                </section>

                <section className="rarity-section" aria-labelledby="epicas-title">
                    <h2 id="epicas-title" className="rarity-title">Épicas</h2>

                    <ul className="tags-grid" role="list">
                        <li className="tag-item">
                            <article className="tag-card">
                                <img src={mestre} alt="Mestre do Sono"></img>
                                <div className="tag-content">
                                    <p className="tag-price">3000 <span>{svg.lyrium}</span></p>
                                    <button className="btn-buy-tag" type="button">Comprar</button>
                                </div>
                            </article>
                        </li>

                        <li className="tag-item">
                            <article className="tag-card">
                                <img src={arquiteto} alt="Arquiteto da Vida"></img>
                                <div className="tag-content">
                                    <p className="tag-price">3000 <span>{svg.lyrium}</span></p>
                                    <button className="btn-buy-tag" type="button">Comprar</button>
                                </div>
                            </article>
                        </li>
                    </ul>
                </section>

                <section className="rarity-section rarity-section-last" aria-labelledby="lendaria-title">
                    <h2 id="lendaria-title" className="rarity-title">Lendária</h2>

                    <ul className="tags-grid tags-grid-single" role="list">
                        <li className="tag-item">
                            <article className="tag-card">
                                <img src={navegador} alt="Navegador da Vitalidade"></img>
                                <div className="tag-content">
                                    <p className="tag-price">6000 <span>{svg.lyrium}</span></p>
                                    <button className="btn-buy-tag" type="button">Comprar</button>
                                </div>
                            </article>
                        </li>
                    </ul>
                </section>
            </main>

        </div>
      <BottomNav />
    </div>
  );
}

export default Tags;