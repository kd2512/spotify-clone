import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>

      <div className="player_footer">
        {/* Footer */}
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
