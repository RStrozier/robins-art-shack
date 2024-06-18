import LatestPostsCarousel from "../../utilities/LatestPostsCarousel";

const LatestPosts = () => {
  return (
    <>
    <div className="large-container">
    <div className="homepage-text poppins-medium">Latest Posts:</div>
    </div>
      <LatestPostsCarousel>
      <div className="large-container">
        <div className="latest-posts-container">
          <div className="latest-post-item">
            <img alt="image01"></img>
            <div className="latest-post-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              repellendus aliquid optio nulla consectetur.
            </div>
            <div className="vibe-tag">TODO:VIBE TAG (ex.painting)</div>

            {/* TODO: ARTIST WHO CREATED THE POST IMAGE */}
            <div className="author-container">
              <div className="author-image">Author Image</div>
              <div className="author-name">Author Name</div>
            </div>
          </div>

          <div className="latest-post-item">
            <img alt="image01"></img>
            <div className="latest-post-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              repellendus aliquid optio nulla consectetur.
            </div>
            <div className="vibe-tag">TODO:VIBE TAG (ex.painting)</div>

            {/* TODO: ARTIST WHO CREATED THE POST IMAGE */}
            <div className="author-container">
              <div className="author-image">Author Image</div>
              <div className="author-name">Author Name</div>
            </div>
          </div>

          <div className="latest-post-item">
            <img alt="image01"></img>
            <div className="latest-post-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              repellendus aliquid optio nulla consectetur.
            </div>
            <div className="vibe-tag">TODO:VIBE TAG (ex.painting)</div>

            {/* TODO: ARTIST WHO CREATED THE POST IMAGE */}
            <div className="author-container">
              <div className="author-image">Author Image</div>
              <div className="author-name">Author Name</div>
            </div>
          </div>
        </div>
        </div>
      </LatestPostsCarousel>
    </>
  );
};

export default LatestPosts;
