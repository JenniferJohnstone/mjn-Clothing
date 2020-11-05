import React from "react";

function Footer() {
  return (

    <div className="footer">
    <div className="pagesFooter">
    <div className="web-name">
      <h2>MJN Clothing</h2>
    </div>

    <div className="footerLinks">
       <h4> Let us help you</h4>
      <ul>
        <li><a href="http://localhost:3000/home"> Home</a></li>
        <li><a href="shops.html">Register</a></li>
        <li><a href="about.html">Products</a></li>
      </ul>
    </div>

    <div className="copyright">
      <p>Copyright 2020 MJN Clothing Limited</p>
    </div>
  </div>
  </div>
  );
}

export default Footer;