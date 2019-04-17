import React from "react";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-container">
        <img className="logo" src='/logo.png'/>
        <div className="titles">
          <div className="title">QUIZINATOR</div>
          <div className="lead">Are you a dummy? {"Let's see..."}</div>
        </div>
      </div>
    </div>
  ) 
};

export default AppHeader;
