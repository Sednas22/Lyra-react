import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";
import "../styles/loja.css"

function Loja(){
  return (
    <div className="app">
      <Sidebar />
      <h1>Loja</h1>
      <BottomNav />
    </div>
);
}

export default Loja;