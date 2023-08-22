import React from "react";
import "./nav.css";
import Img from "../../pictures/logo.png";

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-img">
        <img src={Img} alt="logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <h2 ><a href="/tech" target="blank" className="heading">Tech</a></h2>
        <h2 ><a href="business" target="blank" className="heading">Business</a></h2>
        <h2 ><a href="/sports" target="blank" className="heading">Sports</a></h2>
      </div>
    </div>
  );
};

export default nav;
