import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li>
          <Link to="/posts/coategories/Agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Business">Business</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Education">Education</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Art">Art</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Investment">Investment</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Uncategorized">Uncategorized</Link>
        </li>
        <li>
          <Link to="/posts/coategories/Weather">Weather</Link>
        </li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &Copy; copyright, rahul creations</small>
      </div>
    </footer>
  );
};

export default Footer;
