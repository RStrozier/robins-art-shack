import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="homepage-navbar">
        <Link to="/robins-decisions">
          <p>Click Here To Make Decisions</p>
        </Link>
        <div className="homepage-word-logo">Robin's Art Shack</div>
      </div>
    </>
  );
};

export default NavBar;
