import React from "react";
import { Link } from "react-router-dom";

const LINKcomponent = () => {
  return (
    <div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Test">Test</Link></li>
        </ul>
    </div>
  )
}

export default LINKcomponent;