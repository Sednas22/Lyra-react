import { Link } from "react-router-dom";
import styles from "../styles/index.module.css";
import "../styles/loja.css";
import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";
import cabide from "../assets/cabide.png";
import personalidades from "../assets/personalidades.png";
import tags from "../assets/tags.png";
import bau from "../assets/bau.png";

const svg = {
  notificacao: (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
  ),
  relogio: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
  ),
  lyrium: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="yellow">
                    <circle cx="12" cy="12" r="10" />
                    <text x="12" y="15" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">◎</text>
                  </svg>
  ),
}
  

function Loja() {
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
        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Roupas & Skins</h2>
          </div>

          <Link to="/loja/skins" className="shop-card-link">
            <article className="shop-card shop-card-featured">
              <div className="shop-card-image">
                <img src={cabide} alt="Roupas e Skins disponíveis" />
              </div>

              <div className="shop-card-content">
                <h3>Roupas & Skins</h3>
              </div>
            </article>
          </Link>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Personalidades</h2>
          </div>

          <Link to="/loja/personalidades" className="shop-card-link">
            <article className="shop-card shop-card-featured">
              <div className="shop-card-image">
                <img src={personalidades} alt="Itens de personalidade" />
              </div>

              <div className="shop-card-content">
                <h3>Personalidades</h3>
              </div>
            </article>
          </Link>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Tags</h2>
          </div>

          <Link to="/loja/tags" className="shop-card-link">
            <article className="shop-card shop-card-featured">
              <div className="shop-card-image">
                <img src={tags} alt="Tags disponíveis" />
              </div>

              <div className="shop-card-content">
                <h3>Tags</h3>
              </div>
            </article>
          </Link>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Baú</h2>
          </div>

          <article className="shop-card shop-card-featured">
            <div className="shop-card-image">
              <img src={bau} alt="Baús com recompensas" />
            </div>

            <div className="shop-card-content">
              <h3>Baú</h3>

              <p className="shop-card-price">
                <span className="price-value">400</span>
                {svg.lyrium}
              </p>
            </div>
          </article>
        </section>

      </div>
      <BottomNav />
    </div>
  );
}

export default Loja;