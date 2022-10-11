import React from "react";
import "./Login.css";
import spotifyLoginLogo from "./images/spotifyLoginLogo.png";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src={spotifyLoginLogo} alt="logo"></img>
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
