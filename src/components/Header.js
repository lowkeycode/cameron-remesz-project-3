import "../styles.scss";

import Logo from './Logo';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ onClick, currentUser }) => (
  <header className="header">
    <div className="header__welcome">
      {
        currentUser ? (
          <p>Welcome, <span>{currentUser}</span></p>
        ) : (
          <p>Welcome to...</p>
        )
      }
    </div>

    <Logo/>

    <div className="header__clear">
      <p className="header__clear--copy">Clear chat</p>
      <button className="header__clear--btn-clear" onClick={onClick}>
        <FontAwesomeIcon
          className="icon"
          icon={faTimesCircle}
          color="#2f2b23"
        />
      </button>
    </div>
  </header>
);

export default Header;
