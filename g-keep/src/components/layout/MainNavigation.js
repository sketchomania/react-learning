import { Link } from "react-router-dom";

import { ReactComponent as Menu } from "../../icons/menu_black_24dp.svg";
import { ReactComponent as Theme } from "../../icons/dark_mode_black_24dp.svg";
import { ReactComponent as View } from "../../icons/view_agenda_black_24dp.svg";
import { ReactComponent as Setting } from "../../icons/settings_black_24dp.svg";
import { ReactComponent as Account } from "../../icons/account_circle_black_24dp.svg";
import classes from "./MainNavigation.module.css";
import SearchBar from "./SearchBar";

const MainNavigation = () => {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  return (
    <header className={classes.header}>
      <Menu fill="yellow" />
      <div className={classes.logo}>
        <Link to="/">
          {logo}
          <h3>Keep</h3>
        </Link>
      </div>
      <SearchBar />
      <nav className={classes.nav}>
        <ul>
          <li>
            <Theme />
          </li>
          <li>
            <View />
          </li>
          <li>
            <Setting />
          </li>
          <li>
            <Account />
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
