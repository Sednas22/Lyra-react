import avatarImg from "../../../assets/avatar-lyra.png";
import s from "../../../styles/vestiario-sub.module.css";

const PERSONAS = [
  { id: "1", name: "Padrão", desc: "Original", status: "equipped" },
  { id: "2", name: "Robô", desc: "Futurista", status: "locked", price: "200" },
];

export default function VestiarioPersonalidades({ onBack }) {
  return (
    <>
      <header className={s.subHeader}>
        <div className={s.headerLeft}>
          <button className={s.btnBack} onClick={onBack}>
            ←
          </button>
          <h1>Personalidades</h1>
        </div>
      </header>

      <div className={s.wardrobeDesktopGrid}>
        <div className={s.wardrobeAvatarCol}>
          <img src={avatarImg} alt="Avatar" />
        </div>

        <div className={s.personasGrid}>
          {PERSONAS.map((p) => (
            <div key={p.id} className={s.personaCard}>
              <div className={s.personaBody}>
                <p className={s.personaName}>{p.name}</p>
                <p className={s.personaDesc}>{p.desc}</p>
                <p className={s.personaPrice}>
                  {p.status === "locked" ? `${p.price} ◎` : "Obtido"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
