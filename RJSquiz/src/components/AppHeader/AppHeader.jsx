import React from "react";
import "./style.scss";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-container">
        <img className="logo" src='/logo.png' alt="logo"/>
        <div className="titles">
          <div className="title">QUIZINATOR</div>
          <div className="lead">Are you a dummy? Let's see...</div>
        </div>
      </div>
    </div>
  ) 
};

export default AppHeader;
