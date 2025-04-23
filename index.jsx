import React from "react";
import image7 from "./image-7.png";
import "./style.css";

const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="div">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <img className="image" alt="Image" src={image7} />
          <div className="text-wrapper">FIT</div>
          <div className="text-wrapper-2">MOTION</div>
        </div>

        <div className="overlap">
          <div className="overlap-2">
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <p className="p">Sign in in another Account</p>
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
          <div className="rectangle-5" />
        </div>

        <div className="text-wrapper-3">WELCOME!</div>

        <div className="overlap-3">
          <div className="rectangle-6" />
          <div className="text-wrapper-4">LOGIN</div>
        </div>

        <div className="overlap-4">
          <div className="rectangle-7" />
          <div className="text-wrapper-5">SIGN IN</div>
        </div>
      </div>
    </div>
  );
};

