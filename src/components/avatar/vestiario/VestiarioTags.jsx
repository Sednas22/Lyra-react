import avatarImg from "../../../assets/avatar-lyra.png";
import s from "../../../styles/vestiario-sub.module.css";

const TAGS = [
  { id: "1", name: "Maratonista", status: "owned" },
  { id: "2", name: "Lendário", status: "locked", price: "3000" },
];

export default function VestiarioTags({ onBack }) {
  return (
    <>
      <header className={s.subHeader}>
        <div className={s.headerLeft}>
          <button className={s.btnBack} onClick={onBack}>
            ←
          </button>
          <h1>Tags</h1>
        </div>
      </header>

      <div className={s.wardrobeDesktopGrid}>
        <div className={s.wardrobeAvatarCol}>
          <img src={avatarImg} alt="Avatar" />
        </div>

        <div className={s.tagsGrid}>
          {TAGS.map((tag) => (
            <div key={tag.id} className={s.tagCard}>
              <div>
                <p className={s.tagName}>{tag.name}</p>
                <p className={s.tagRarity}>
                  {tag.status === "locked" ? `${tag.price} ◎` : "Obtida"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
