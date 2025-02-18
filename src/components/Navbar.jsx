import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "blue" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
        <li><Link to="/react-4/page1" style={{ color: "#fff" }}>Page 1</Link></li>
        <li><Link to="/react-4/page2" style={{ color: "#fff" }}>Page 2</Link></li>
        <li><Link to="/react-4/page3" style={{ color: "#fff" }}>Page 3</Link></li>
        <li><Link to="/react-4/page4" style={{ color: "#fff" }}>Page 4</Link></li>
        <li><Link to="/react-4/page5" style={{ color: "#fff" }}>Page 5</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
