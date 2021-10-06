import logo from "../chatter-logo.svg";

// Reusable logo component

const Logo = () => (
  <div className="header__chatter">
    <h1 className="header__chatter--title">Chatter</h1>
    <img className="header__chatter--img" src={logo} alt="Chatter logo" />
  </div>
);

export default Logo;
