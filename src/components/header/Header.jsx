
import "./Header.css";
import { BsBrowserEdge } from "react-icons/bs";


function Header() {
  return (
    <div className="header">
      <div className="header-left">
        
        <span>
        <BsBrowserEdge className="logo-icon" /><a href="#">My playlist</a>
        </span>

        <span>
           <a href="#">Last Listening</a>
        </span>
      </div>
      
      <div className="search-bar">
      
        <input type="text" placeholder="What do you want to play?" />
      </div>

      <div className="header-right">
        <a href="#">Premium</a>
        <a href="#">Support</a>
        <a href="#">Download</a>
        <span className="divider">|</span>
        <a href="#" className="install">
        
        </a>
        <a href="#">Sign up</a>
        <button className="login-btn">Log in</button>
      </div>
    </div>
  );
}

export default Header;
