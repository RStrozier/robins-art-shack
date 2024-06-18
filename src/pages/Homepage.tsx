import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="section homepage">
        <div className="div">Homepage</div>
        <div className="div">
          <Link to="/robins-decisions">
          <p>Click Here To Make Decisions</p>
          </Link>
        </div>
        </div>
    </>
  );
};

export default Homepage;
