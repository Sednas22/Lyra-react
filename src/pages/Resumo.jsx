import { Link } from "react-router-dom";
import styles from "../styles/index.module.css";

function Resumo() {
  return (
    <div className={styles.app}>
      
      <header className={styles.appHeader}>
        <h1>Resumo</h1>

        <div className={styles.headerActions}>
          <div className={styles.badgePoints}>
            <span>--</span>
            <span className={styles.dot}></span>
          </div>

          <button className={styles.btnIcon}>🔔</button>
        </div>
      </header>

      <div className={styles.nameBar}>
        <span>Nome</span>
      </div>

      <div className={styles.scrollContent}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Dashboard</h2>
            <Link to="/resumo/dash" className={styles.linkArrow}>Ver detalhes →</Link>
          </div>

          <div className={styles.summaryCard}>
            <figure className={styles.ringWrap}>
              <svg viewBox="0 0 90 90">
                <circle className={styles.ringTrack} cx="45" cy="45" r="38" />
                <circle className={styles.ringSleep} cx="45" cy="45" r="38" />
                <circle className={styles.ringTrack} cx="45" cy="45" r="28" />
                <circle className={styles.ringSteps} cx="45" cy="45" r="28" />
                <circle className={styles.ringTrack} cx="45" cy="45" r="18" />
                <circle className={styles.ringExercise} cx="45" cy="45" r="18" />
              </svg>

              <div className={styles.ringCenter}></div>
            </figure>

            <ul className={styles.ringLegend}>
              <li className={styles.lSleep}>Sono</li>
              <li className={styles.lSteps}>Passos</li>
              <li className={styles.lExercise}>Exercícios</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.statGrid}>
            <article className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <Link to="/resumo/alimentacao" className={styles.linkArrow}><h3>Alimentação</h3>→</Link>
              </div>
              <p className={styles.statLabel}>Hoje</p>
              <p className={styles.statValue}>
                -- <small>kcal</small>
              </p>
              <button className={styles.btnPill}>Camera</button>
            </article>

            <article className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <Link to="/resumo/sono" className={styles.linkArrow}><h3>Sono</h3>→</Link>
              </div>
              <p className={styles.statLabel}>Hoje</p>
              <p className={styles.statValue}>
                -- <small>horas</small>
              </p>
              <button className={`${styles.btnPill} ${styles.alert}`}>
                Durma mais, fi!
              </button>
            </article>

            <article className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <Link to="/resumo/passos" className={styles.linkArrow}><h3>Passos</h3>→</Link>
              </div>
              <p className={styles.statLabel}>Hoje</p>
              <p className={styles.statValue}>--</p>
              <p className={styles.statSub}>Distância</p>
              <p className={styles.statValue} style={{ fontSize: "1.25rem" }}>
                -- km
              </p>
            </article>

            <article className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <Link to="/resumo/exercicio" className={styles.linkArrow}><h3>Exercícios</h3>→</Link>
              </div>
              <p className={styles.statLabel}>Hoje</p>
              <p className={styles.statSub}>Treino</p>
              <p className={styles.statValue}>
                -- <small>cal</small>
              </p>
            </article>
          </div>
        </section>

        <section>
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h2>Care Plus: um conselho para viver melhor</h2>
              <p>Lembre-se que agora é um presente.</p>
              <button className={styles.btnOutlineWhite}>
                Conheça a campanha
              </button>
            </div>

            <div className={styles.carouselDots}>
              <span className={styles.active}></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Dicas</h2>
            <Link to="/resumo/dicas" className={styles.linkArrow}>Ver todas →</Link>
          </div>

          <div className={styles.tipsScroll}>
            <article className={styles.tipCard}>
              <h4>Dicas de Sono</h4>
              <p>
                Para uma vida plena, dormir bem é fundamental para restaurar sua mente...
              </p>
            </article>

            <article className={styles.tipCard}>
              <h4>Dicas de Treino</h4>
              <p>
                Para que seus treinos tenham o máximo de resultado, dormir bem é crucial...
              </p>
            </article>

            <article className={styles.tipCard}>
              <h4>Dicas de Saúde</h4>
              <p>
                Pequenos hábitos diários fazem toda a diferença para sua qualidade de vida...
              </p>
            </article>
          </div>
        </section>

        <p className={styles.tipParagraph}>
          Dormir bem restaura sua energia, praticar exercícios fortalece seu corpo e mente,
          e realizar seu exame é essencial para o monitoramento preventivo.
        </p>

      </div>
    </div>
  );
}

export default Resumo;