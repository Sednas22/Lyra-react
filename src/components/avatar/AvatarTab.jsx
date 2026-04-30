import { useState } from "react";
import avatarImg from "../../assets/avatar-lyra.png";

const IconTrophy = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
    <path d="M17 6h2a2 2 0 0 1 0 4h-2" />
    <path d="M7 6H5a2 2 0 0 0 0 4h2" />
  </svg>
);
const IconFlame = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 2s.3 2.2-1.4 4.5c-1.2 1.7-3.1 2.9-4.2 4.8A7.8 7.8 0 0 0 7 15c0 4 2.8 7 6.8 7 3.9 0 7.2-2.9 7.2-7.1 0-5-3.4-8.1-7.5-12.9z" />
  </svg>
);
const IconCheck = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12l4 4 10-10" />
  </svg>
);
const IconLock = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const CHESTS = [
  { id: 1, unlocked: true, badge: "success" },
  { id: 2, unlocked: false, badge: "sparkle" },
  { id: 3, unlocked: false, badge: "sparkle" },
  { id: 4, unlocked: true, badge: "leaf" },
];

function AvatarTab({ styles: s }) {
  const [chestModal, setChestModal] = useState(null);

  const trofeus = "--";
  const streak = "--";

  return (
    <>
      <section className={s.heroSection}>
        <h2 className="sr-only">Avatar principal</h2>
        <div className={s.avatarStage}>
          <p className={`${s.speechBubble} ${s.speechBubbleLeft}`}>
            Tá com fome?
            <br />
            Bora Almoçar
          </p>
          <p className={`${s.speechBubble} ${s.speechBubbleRight}`}>
            Aoba meu fi,
            <br />
            Bora Treinar?
          </p>
          <figure className={s.avatarFigure}>
            <div className={s.avatarCharacter}>
              <img
                src={avatarImg}
                alt="Avatar virtual segurando uma garrafa e acenando"
              />
            </div>
          </figure>
          <div className={s.avatarShadow} />
        </div>
      </section>

      <section className={s.statusSection}>
        <div className={s.statusGrid}>
          <article className={s.statusCard}>
            <div className={s.statusCardHeading}>
              <h3>Troféus</h3>
            </div>
            <div className={`${s.statusCardBody} ${s.cardGreen}`}>
              <span className={s.statusIcon}>{IconTrophy}</span>
              <strong>{trofeus}</strong>
            </div>
          </article>
          <article className={s.statusCard}>
            <div className={`${s.statusCardHeading} ${s.headingRight}`}>
              <h3>Streak</h3>
            </div>
            <div className={`${s.statusCardBody} ${s.cardLime}`}>
              <span className={s.statusIcon}>{IconFlame}</span>
              <strong>{streak}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className={s.chestsSection}>
        <div className={s.sectionHeader}>
          <h2>Baús</h2>
        </div>
        <div className={s.chestsGrid}>
          {CHESTS.map((chest) => (
            <article key={chest.id} className={s.chestCard}>
              {!chest.unlocked && (
                <span className={s.lockIcon}>{IconLock}</span>
              )}
              <div
                className={`${s.chestShell}${
                  !chest.unlocked ? ` ${s.chestShellLight}` : ""
                }`}
              >
                <button
                  type="button"
                  className={s.chestBtn}
                  aria-label={
                    chest.unlocked
                      ? `Abrir baú ${chest.id}`
                      : `Baú ${chest.id} bloqueado`
                  }
                  disabled={!chest.unlocked}
                  onClick={() => chest.unlocked && setChestModal(chest.id)}
                >
                  <div className={s.chestIllustration}>
                    <span className={s.chestLid} />
                    <span className={s.chestBase} />
                    <span className={s.chestBand} />
                    <span className={s.chestLock} />
                  </div>
                </button>
              </div>
              <span className={`${s.chestBadge} ${s[chest.badge]}`}>
                {chest.badge === "success" && IconCheck}
              </span>
            </article>
          ))}
        </div>
      </section>

      {chestModal && (
        <div
          className={s.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setChestModal(null)}
        >
          <div className={s.modalSheet} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <h2>Baú {chestModal}</h2>
              <button
                className={s.modalClose}
                type="button"
                onClick={() => setChestModal(null)}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            <p className={s.modalEmpty}>
              As recompensas aparecerão aqui quando integradas ao backend.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default AvatarTab;
