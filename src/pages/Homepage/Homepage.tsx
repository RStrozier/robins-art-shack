import { Link } from "react-router-dom";
import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="div">Homepage</div>

          <div className="homepage-navbar">
            <div className="div">Robin's Art Shack</div>
            <Link to="/robins-decisions">
              <p>Click Here To Make Decisions</p>
            </Link>
          </div>

          <div className="homepage-buckets">
            <div className="bucket">Paintings</div>
            <div className="bucket">Record Art</div>
            <div className="bucket">Drawings</div>
          </div>
      </div>
    </>
  );
};

export default Homepage;
