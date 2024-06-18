const AboutRobin = () => {
  return (
    <>
      <div className="about-robin-container large-container">
        {/* TODO: ALL OF THIS STYLING */}
        <div className="homepage-text">About the Artist</div>
        <div className="about-robin-section">
        <div className="about-image-section">
          <img alt="about-robin-image"></img>
          </div>
          <div className="about-wording-section">
          <div className="about-robin-title">About Robin</div>
          <div className="about-robin-description">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          </div>
        </div>
        <div className="about-robin-section">
          <div className="about-image-section">
          <img alt="about-robin-image"></img>
          </div>
          <div className="about-wording-section">
          <div className="about-robin-title">Gallery</div>
          <div className="about-robin-description">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRobin;
