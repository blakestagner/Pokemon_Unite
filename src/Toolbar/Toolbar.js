import "./toolbar.css";
import logo from "./img/unite-logo.png";

export default function Toolbar() {
  return (
    <nav className="toolbar">
      <div>
        <img src={logo} alt="unite logo" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/roster">Roster</a>
        </li>
        <li>
          <a href="/items">Items</a>
        </li>
      </ul>
    </nav>
  );
}
