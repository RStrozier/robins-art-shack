import { Link } from "react-router-dom";
import "./NavBar.css";
import { RiAlignJustify } from "react-icons/ri";
import navbarBackground from "../../assets/imgs/navbar-background.jpg"

const NavBar = () => {
  return (
    <>
      <div className="homepage-navbar"
       style={{
        backgroundImage: `url(${navbarBackground})`}}>
        <Link to="/">
        <div className="homepage-word-logo poppins-bold">Robin's Art Shack</div>
        </Link>
        <div className="icon-container">
          <RiAlignJustify size={34} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
