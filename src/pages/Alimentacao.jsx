import { Link } from "react-router-dom";
import styles from "../styles/alimentacao.module.css";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

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
              <div className={styles.mealThumb}></div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Café da manhã</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}></div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Almoço</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}></div>
              <div className={styles.mealInfo}>
                <span className={styles.mealName}>Jantar</span>
                <span className={styles.mealCal}>-- kcal</span>
              </div>
            </li>

            <li className={styles.mealItem}>
              <div className={styles.mealThumb}></div>
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