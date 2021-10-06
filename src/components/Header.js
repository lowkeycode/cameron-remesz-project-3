import "../styles.scss";

import Logo from './Logo';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// If there is a current user display personalized message
// Clear button takes handleClear={onClick} from App.js to clear db and all visible comments (Also button is accessible)
// Signout button takes signOut={signOutUser} to sign out user changing loggedIn state to false, removing main app and thus displaying sign in page again

export const Header = ({ onClick, currentUser, signOut }) => (
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
      <div className="clear-container">
        <p className="header__clear--copy">Clear chat</p>
        <button className="header__clear--btn-clear" onClick={onClick}>
          <span className="sr-only">Clear chat button</span>
          <FontAwesomeIcon
            className="icon"
            icon={faTimesCircle}
            color="#2f2b23"
          />
        </button>
      </div>
      <div>
        <button className="log-out-btn" onClick={signOut}>Sign out</button>
      </div>
    </div>
  </header>
);

export default Header;
