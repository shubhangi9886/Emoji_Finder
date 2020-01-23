import React from "react";
import "./Header.css";
import logo1 from './cat1.png';
import logo2 from './cat2.png';

function Emoji_Header() {
  return <div className="emoji-navbar">
    <img  alt='t'src={logo1}/>    
      Emoji Search
    <img alt='t'src={logo2}/>
    <a className="github" href="https://github.com/shubhangi9886/Emoji_Finder">Fork me on GitHub</a>
    </div>
}

export default Emoji_Header;