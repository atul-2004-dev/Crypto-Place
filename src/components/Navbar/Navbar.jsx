import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "USD", Symbol: "$" });
        break;
      }

      case "eur": {
        setCurrency({ name: "EUR", Symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "INR", Symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "USD", Symbol: "$" });
        break;
      }
    }
  };

  
  return (
    <div className="navbar">
      <Link to={"/"}>
        {" "}
        <img className="logo" src={logo} alt="" />
      </Link>
      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>
        <Link to={"/features"}>
          {" "}
          <li>Features</li>
        </Link>
        <Link to={"/pricing"}>
          {" "}
          <li>Pricing</li>
        </Link>
        <Link to={"/blog"}>
          {" "}
          <li>Blog</li>
        </Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
