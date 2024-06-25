import artData from '../../data/robind-art.json';

const FeaturedItems = () => {
  const featuredItem = artData.find((item) => item.featured);
  const featuredImage = featuredItem?.artImage

  console.log("Vibe Tag Names: " + featuredItem?.vibeTags);

  if (!featuredItem) {
    return null; // Return null if no featured item is found
  }


  return (
    <>
      <div className="homepage-featured medium-container">
        <div className="homepage-text poppins-medium">Featured</div>
        <div className="featured-bucket-item">
          <div className="featured-items-container">
            <img src={featuredImage} alt="{featuredImage}" />
            <div className="featured-title">{featuredItem.artName}</div>
          </div>
          <div className="vibe-tag">
              {featuredItem.vibeTags}
            </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;