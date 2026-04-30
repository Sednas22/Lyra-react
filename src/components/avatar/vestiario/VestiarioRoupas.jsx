import avatarImg from "../../../assets/avatar-lyra.png";
import camisaImg from "../../../assets/camisa.png";
import regataImg from "../../../assets/regata.png";
import shortsImg from "../../../assets/shorts.png";
import tenisImg from "../../../assets/tenis.png";
import garrafaImg from "../../../assets/garrafa.png";
import testeiraImg from "../../../assets/Faixa-roxa.png";
import pocheteImg from "../../../assets/pochete.png";
import boneImg from "../../../assets/bone.png";
import s from "../../../styles/vestiario-sub.module.css";

const IconBack = (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconCheck = (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="3">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

const IconLock = (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ROUPAS = [
  { id: "regata", label: "Regata", img: regataImg, status: "equipped" },
  { id: "camisa", label: "Camisa", img: camisaImg, status: "owned" },
  {
    id: "shorts",
    label: "Shorts",
    img: shortsImg,
    price: "50",
    status: "locked",
  },
  { id: "tenis", label: "Tênis", img: tenisImg, price: "80", status: "equipped" },
];

const ACESSORIOS = [
  { id: "garrafa", label: "Garrafa", img: garrafaImg, status: "equipped" },
  { id: "testeira", label: "Testeira", img: testeiraImg, status: "equipped" },
  {
    id: "pochete",
    label: "Pochete",
    img: pocheteImg,
    price: "60",
    status: "equipped",
  },
  { id: "bone", label: "Boné", img: boneImg, price: "40", status: "locked" },
];

function ItemCard({ item }) {
  const classes = [
    s.itemCard,
    item.status === "equipped" && s.equipped,
    item.status === "locked" && s.locked,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className={s.itemImg}>
        <img src={item.img} alt={item.label} />
      </div>

      <div className={s.itemFooter}>
        <span className={s.itemName}>{item.label}</span>
        <span
          className={`${s.itemPrice} ${
            item.status !== "locked" ? s.itemPriceOwned : ""
          }`}
        >
          {item.status === "equipped" && "Equipada"}
          {item.status === "owned" && "Obtida"}
          {item.status === "locked" && `${item.price} ◎`}
        </span>
      </div>

      {item.status === "equipped" && (
        <div className={s.checkBadge}>{IconCheck}</div>
      )}
      {item.status === "locked" && (
        <div className={s.lockBadge}>{IconLock}</div>
      )}
    </div>
  );
}

export default function VestiarioRoupas({ onBack }) {
  return (
    <>
      <header className={s.subHeader}>
        <div className={s.headerLeft}>
          <button className={s.btnBack} onClick={onBack}>
            {IconBack}
          </button>
          <h1>Vestuário</h1>
        </div>
      </header>

      <div className={s.wardrobeDesktopGrid}>
        <div className={s.wardrobeAvatarCol}>
          <h2>Seu Avatar</h2>
          <div className={s.avatarPreviewWrap}>
            <img src={avatarImg} alt="Avatar" />
          </div>
          <div className={s.avatarShadowSm} />
          <div className={s.equippedBadge}>Camisa equipada</div>
        </div>

        <div className={s.wardrobeItemsCol}>
          <div>
            <h3>Roupas</h3>
            <div className={s.itemsGrid}>
              {ROUPAS.map((i) => (
                <ItemCard key={i.id} item={i} />
              ))}
            </div>
          </div>

          <div>
            <h3>Acessórios</h3>
            <div className={s.itemsGrid}>
              {ACESSORIOS.map((i) => (
                <ItemCard key={i.id} item={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
