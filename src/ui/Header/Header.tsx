import logo from "../../assets/deadful_tomatoes.png";
import "./styles.scss";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Dreadful chery logo" />
    </header>
  );
}
