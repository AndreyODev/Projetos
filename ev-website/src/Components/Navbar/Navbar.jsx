import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li>Início</li>
        <li>Explorar</li>
        <li>Sobre</li>
        <li className="nav-contact">Contato</li>
      </ul>
    </div>
  );
}
