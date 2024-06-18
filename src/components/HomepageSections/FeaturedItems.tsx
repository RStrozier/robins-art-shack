const FeaturedItems = () => {
  return (
    <>
      <div className="homepage-featured medium-container">
        <div className="homepage-text">Featured</div>
            <div className="featured-bucket-item">
            <div className="featured-items-container">
                <img alt="image01"></img>
                <div className="vibe-tag">TODO:VIBE TAG (ex.vinyl), (yellow)</div>
                <div className="featured-title">Featured Item Name 1</div>
                </div>
            </div>
            <div className="featured-bucket-item">
            <div className="featured-items-container">
                <img alt="image02"></img>
                <div className="vibe-tag">TODO:VIBE TAG (ex.painting)</div>
                <div className="featured-title">Featured Item Name 2</div>
                </div>
            </div>
        </div>
    </>
  );
};

export default FeaturedItems;
