import "./Homepage.css";
import HomepageBuckets from "../../components/HomepageSections/HomepageBuckets";
import FeaturedItems from "../../components/HomepageSections/FeaturedItems";
import LatestPosts from "../../components/HomepageSections/LatestPosts";
import AboutRobin from "../../components/HomepageSections/AboutRobin";
import VibeTags from "../../components/HomepageSections/VibeTags";
import HomepageIntro from "../../components/HomepageSections/HomepageIntro";
import RobinsFavorites from "../../components/HomepageSections/RobinsFavorites";
import { Link } from "react-router-dom";
import ContactRobin from "../../components/HomepageSections/ContactRobin";
import homepageBackground from '../../assets/imgs/homepage-background.jpg';

const Homepage = () => {
  return (
    <>
      <div className="homepage"
        style={{
          backgroundImage: `url(${homepageBackground})`}}
      >
        <Link 
        className="poppins-semibold-italic"
        to="/robins-decisions">
          <div>Click Here To Make Decisions</div>
        </Link>
        <HomepageIntro />
        <HomepageBuckets />
        <FeaturedItems />
        <LatestPosts />
        <VibeTags />
        <AboutRobin />
        <ContactRobin />
        <RobinsFavorites />
      </div>
    </>
  );
};

export default Homepage;
