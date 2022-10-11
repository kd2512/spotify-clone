import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateProvideVal } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateProvideVal();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input type="text" placeholder="Search for artists, songs, etc." />
      </div>

      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
