// import { Link } from "react-router-dom";
import "./Homepage.css";
import HomepageBuckets from "../../components/HomepageSections/HomepageBuckets";
import NavBar from "../../components/NavBar/NavBar";
import FeaturedItems from "../../components/HomepageSections/FeaturedItems";
import LatestPosts from "../../components/HomepageSections/LatestPosts";
import AboutRobin from "../../components/HomepageSections/AboutRobin";
import VibeTags from "../../components/HomepageSections/VibeTags";
import Footer from "../../components/footer/Footer";
import HomepageIntro from "../../components/HomepageSections/HomepageIntro";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <NavBar />
        <HomepageIntro />
        <HomepageBuckets />
        <FeaturedItems />
        <LatestPosts />
        <AboutRobin />
        <VibeTags />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
