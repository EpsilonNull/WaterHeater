/** @jsx jsx */
import { jsx } from "theme-ui";
import "./Header.css";

const Header = () => {
  return (
    <header sx={{ bg: "backgroundSecondary" }}>
      <h1 className="logo-text" sx={{ color: "text" }}>
        <img src={require('../../assets/logo.svg')} alt="logo" />
        Water Heater Tracker
      </h1>
    </header>
  );
};

export default Header;
