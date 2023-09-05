import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://www.youtube.com/@geomosfilms8981">YouTube</a>
        <a href="https://www.linkedin.com/in/clarance-majoko-0ba62a18b/?originalSubdomain=za">LinkedIn</a>
        <a href="https://zoutnet.co.za/articles/newsflash/54269/2021-05-15/raising-legends-awards-recognise-vhembes-top-young-influencers">Award Winner</a>
        <a href="https://twitter.com/TsongaChronicle">Twitter</a>
        <a href="https://www.instagram.com/geomos_films/">Instagram</a>
        <a href="https://www.facebook.com/people/Tsonga-Chronicles/100063860033110/?paipv=0&eav=AfalmHT8fx2mCQbHX9tqFwvtgKDSLEFyas2IbEDsPZyAhQWWm6ue_VptXOs5GpIFzC8&_rdr">Facebook</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Geomos</p>
    </footer>
  );
};

export default Footer;