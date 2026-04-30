import { Link } from "react-router-dom";
import styles from "../styles/index.module.css";
import "../styles/skinsLoja.css"
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import camisa from "../assets/camisa.png";
import regata from "../assets/regata.png";
import shorts from "../assets/shorts.png";
import tenis from "../assets/tenis.png";
import garrafa from "../assets/garrafa.png";
import testeira from "../assets/testeira.png";
import pochete from "../assets/pochete.png";
import bone from "../assets/bone.png";
import homemaranha from "../assets/homemAranha.png";
import robo from "../assets/robo.png";
import caipira from "../assets/caipira.png";
import neymar from "../assets/neymar.png";

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

function Roupas() {
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

        <div class="scroll-content">
            <div className="back-button-container">
                <Link to="/loja" className="back-button" aria-label="Voltar para a loja">← Roupas & Skins</Link>
            </div>

            <section class="category-section">
                <h2 class="category-title">Roupas</h2>

                <div class="carousel-container">
                    <div class="carousel-scroll" role="region" aria-label="Carrossel de roupas">
                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={camisa} alt="camisa"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={regata} alt="regata"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={shorts} alt="shorts"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={tenis} alt="tenis"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section class="category-section">
                <h2 class="category-title">Acessórios</h2>

                <div class="carousel-container">
                    <div class="carousel-scroll" role="region" aria-label="Carrossel de acessórios">

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={garrafa} alt="garrafa"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={testeira} alt="testeira"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={pochete} alt="pochete"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={bone} alt="bone"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section class="category-section">
                <h2 class="category-title">Skins</h2>

                <div class="carousel-container">
                    <div class="carousel-scroll" role="region" aria-label="Carrossel de skins">

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={homemaranha} alt="homemAranha"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={robo} alt="robo"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={caipira} alt="caipira"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="carousel-item">
                            <div class="item-card">
                                <div class="item-image">
                                    <img src={neymar} alt="neymar"></img>
                                </div>
                                <div class="item-info">
                                    <p class="item-price">50 <span>{svg.lyrium}</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

        </div>

      <BottomNav />
    </div>
  );
}

export default Roupas;