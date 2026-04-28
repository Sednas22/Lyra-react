import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";
import styles from "../styles/avatar.module.css"

function Avatar(){
  return (
    <div className={styles.app}>
      <Sidebar />
      <h1>Avatar</h1>
      <BottomNav />
    </div>
);
}

export default Avatar;