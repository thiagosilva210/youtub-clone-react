import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />

        <Link to="/">
          <img
            className="header__logo"
            src="https://www.famillesrurales.org/plouzevede/sites/multisite.famillesrurales.org._plouzevede/files/ckeditor/actualites/images/1504100047.jpg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
          name="fname"
        />

        <Link to={`/search/fname=${inputSearch}`}>
          <SearchIcon className="header__inputButton" onClick={inputSearch} />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src="https://upload.wikimedia.org/wikipedia/lt/thumb/4/44/ClaudeSpeed.jpg/180px-ClaudeSpeed.jpg" />
      </div>
    </div>
  );
}

export default Header;
