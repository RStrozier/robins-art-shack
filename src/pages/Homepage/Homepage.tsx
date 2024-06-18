import "./Homepage.css";
import HomepageBuckets from "../../components/HomepageSections/HomepageBuckets";
import FeaturedItems from "../../components/HomepageSections/FeaturedItems";
import LatestPosts from "../../components/HomepageSections/LatestPosts";
import AboutRobin from "../../components/HomepageSections/AboutRobin";
import VibeTags from "../../components/HomepageSections/VibeTags";
import HomepageIntro from "../../components/HomepageSections/HomepageIntro";
import RobinsFavorites from "../../components/HomepageSections/RobinsFavorites";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <Link to="/robins-decisions">
          <p>Click Here To Make Decisions</p>
        </Link>
        <HomepageIntro />
        <HomepageBuckets />
        <FeaturedItems />
        <LatestPosts />
        <AboutRobin />
        <VibeTags />
        <RobinsFavorites />
      </div>
    </>
  );
};

export default Homepage;
