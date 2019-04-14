import React from "react";
import "./style.css";



const Header = props => (
    <div className="header">
        <div className="header-title">{props.children}</div>
        <div className="header-score">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;

