
import "./Header.css";
import { BsBrowserEdge} from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";


function Header() {
  return (
    <div className="header">
      <div className="header-left">
        
        <span>
        <BsBrowserEdge className="logo-icon" />
        </span>

        <span>
         <IoIosHome className="home-icon" />
        </span>
      </div>
      
      <div className="search-bar">
         <FaSearch className="search-icon" />
        <input type="text" placeholder="What do you want to play?" />
         <span className="divider">|</span>
        <GoBrowser className="browser-image" />
      </div>

      <div className="header-right">
        <h3>Premium</h3>
        <h3>Support</h3>
        <h3>Download</h3>
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
