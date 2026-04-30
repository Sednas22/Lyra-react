import avatarImg from "../../../assets/avatar-lyra.png";
import s from "../../../styles/vestiario-sub.module.css";

export default function VestiarioAcessorios({ onBack }) {
  return (
    <>
      <header className={s.subHeader}>
        <div className={s.headerLeft}>
          <button className={s.btnBack} onClick={onBack}>
            ←
          </button>
          <h1>Acessórios</h1>
        </div>
      </header>

      <div className={s.wardrobeDesktopGrid}>
        <div className={s.wardrobeAvatarCol}>
          <h2>Seu Avatar</h2>
          <div className={s.avatarPreviewWrap}>
            <img src={avatarImg} alt="Avatar" />
          </div>
        </div>

        <div className={s.wardrobeItemsCol}>
          <p>Lista de acessórios aqui</p>
        </div>
      </div>
    </>
  );
}
