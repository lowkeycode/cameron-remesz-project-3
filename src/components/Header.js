import '../styles.scss';
import logo from '../chatter-logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__welcome">
        <p>Welcome to...</p>
      </div>

      <div className="header__chatter">
        <h1 className="header__chatter--title">Chatter</h1>
        <img className="header__chatter--img" src={logo} alt="Chatter logo"/>
      </div>

      <div className="header__clear">
        <p className="header__clear--copy">Clear chat</p>
        <button className="header__clear--btn-clear"><FontAwesomeIcon className="icon" icon={faTimesCircle} color="#2f2b23"/>
        </button>
      </div>
    </header>
  )
}

export default Header;
