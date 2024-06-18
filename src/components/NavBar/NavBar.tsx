import "./NavBar.css";
import { RiAlignJustify } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <div className="homepage-navbar">
        <div className="homepage-word-logo">Robin's Art Shack</div>
        <div className="icon-container">
          <RiAlignJustify size={32} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
