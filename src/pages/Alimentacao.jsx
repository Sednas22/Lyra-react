import { Link } from "react-router-dom";
import styles from "../styles/alimentacao.module.css";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

const svg = {
  camera: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                        <circle cx="12" cy="13" r="4" />
                                    </svg>
  ),
  xicara: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-mid)"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1="6" y1="1" x2="6" y2="4" />
                                <line x1="10" y1="1" x2="10" y2="4" />
                                <line x1="14" y1="1" x2="14" y2="4" />
                            </svg>
  ),
}

function Alimentacao() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <header className={styles.appHeader}>
        <Link to="/resumo" className={`${styles.btnIcon} ${styles.btnBack}`}>
          ←
        </Link>
        <h1>Alimentação</h1>
        <span className={styles.headerSpacer}></span>
      </header>

      <div className={styles.scrollContent}>
        <section className={styles.section}>
          <div className={styles.summaryRow}>
            
            <div className={styles.calTotalCard}>
              <p className={styles.calTotalLabel}>Calorias</p>
              <p className={styles.calTotalSub}>Consumidas hoje</p>
              <p className={styles.calTotalValue}>-- kcal</p>
            </div>

            <div className={styles.cameraCard}>
              <div className={styles.cameraCardTop}>
                <span className={styles.cameraLabel}>Registrar</span>
                {svg.camera}
              </div>

              <p className={styles.cameraDesc}>
                Tire uma foto da sua refeição
              </p>

              <span className={styles.cameraArrow}>→</span>
            </div>

          </div>
        </section>

        <section className={`${styles.section} ${styles.mealsSection}`}>
          <h2 className={styles.dayHeading}>Hoje</h2>

          <ul className={styles.mealsList}>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}>{svg.xicara}</div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Café da manhã</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}>{svg.xicara}</div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Almoço</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}>{svg.xicara}</div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Jantar</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}>{svg.xicara}</div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Lanches</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

          </ul>
        </section>
      </div>
      <BottomNav />
    </div>
  );
}

export default Alimentacao;