import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <div className="navbar-home">
      <div className="logo-main">
        <Link to="/">
          {" "}
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>
      </div>
      <div className="menus">
        <div className="menu">
          <ion-icon name="heart-outline"></ion-icon>
          <a href="#">Free Listing</a>
        </div>

        <div className="menu drop-down">
          <div
            className="list-menu"
            onClick={() => {
              setshowLogin(!showLogin);
              setHelp(false);
            }}
          >
            <ion-icon name="person-outline"></ion-icon>
            <p>Log in</p>
          </div>

          <div className={showLogin ? "drop login active" : "drop"}>
            <Link to="/login">Traveler Login</Link>
            <a href="#">Vedor Login</a>
          </div>
        </div>

        <div className="menu">
          <ion-icon name="person-add-outline"></ion-icon>
          <Link to="/register">Sign up</Link>
        </div>

        <div className="menu drop-down">
          <div
            className="list-menu"
            onClick={() => {
              setHelp(!help);
              setshowLogin(false);
            }}
          >
            <ion-icon name="help-circle-outline"></ion-icon>
            <p>Help</p>
          </div>

          <div className={help ? "drop help active" : "drop"}>
            <a href="#">Traveler Help</a>
            <a href="#">Owner Help</a>
            <a href="#">Property Manager Help</a>
            <a href="#">Trust & Safety</a>
          </div>
        </div>

        <div className="menu">
          <a href="#">USD($)</a>
        </div>

        <div className="menu em">
          <img
            src="https://csvcus.homeaway.com/rsrcs-crs/baseline/5.16.0/images/flag/us.svg"
            alt=""
          />
          <a href="#">EM</a>
        </div>
      </div>

      <div className="prop">
        <p>List your Property</p>
      </div>
    </div>
  );
};
