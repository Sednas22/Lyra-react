import { Link } from "react-router-dom";
import styles from "../styles/dicas.module.css";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

function Dicas() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <header className={styles.appHeader}>
        <Link to="/resumo" className={`${styles.btnIcon} ${styles.btnBack}`} aria-label="Voltar">←</Link>

        <h1>Dicas</h1>

        <span className={styles.headerSpacer} aria-hidden="true"></span>
      </header>

      <main className={styles.scrollContent}>

        <article className={styles.tipCard} aria-labelledby="tip-sono">
          <h2 className={styles.tipHeading} id="tip-sono">Dicas de Sono</h2>
          <p className={styles.tipText}>
            Para uma vida plena, dormir bem é fundamental para restaurar sua mente,
            enquanto o exercício fortalece seu corpo. Contudo, a chave para a longevidade
            é o cuidado preventivo, e fazer seu exame na Care Plus garante o monitoramento
            preciso da sua saúde.
          </p>
        </article>

        <article className={styles.tipCard} aria-labelledby="tip-treino">
          <h2 className={styles.tipHeading} id="tip-treino">Dicas de Treino</h2>
          <p className={styles.tipText}>
            Para que seus treinos tenham o máximo resultado, dormir bem é crucial para
            a recuperação muscular. Manter essa rotina de exercícios exige um corpo saudável
            e fazer seu exame na Care Plus garante que você treine com total segurança e
            performance.
          </p>
        </article>

      </main>
      <BottomNav />
    </div>
  );
}

export default Dicas;