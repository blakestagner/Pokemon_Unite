import "./toolbar.css";
import logo from "./img/unite-logo.png";

export default function SideNav() {
  return (
    <nav className="sidenav">
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
