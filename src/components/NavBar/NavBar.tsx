// import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { RiAlignJustify } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <div className="homepage-navbar">
        {/* CANT USE SINCE ITS PASSWORD PROTECTED */}
        {/* <NavLink to="/"> */}
        <div className="homepage-word-logo">Robin's Art Shack</div>
        {/* </NavLink> */}
        <div className="icon-container">
          <RiAlignJustify size={32} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
