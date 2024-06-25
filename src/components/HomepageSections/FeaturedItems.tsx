import artData from '../../data/robind-art.json';
import beastieBoysArt from '../../assets/imgs/BEASTIE-BOYS-ALBUM-ART.jpg'

const FeaturedItems = () => {
  const featuredItem = artData.find((item) => item.featured);

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
            <img src={beastieBoysArt} 
            alt="featured Image missing" 
            className="featured-image"/>
            <div className="featured-title">{featuredItem.artName}</div>
        
          <div className="vibe-tag"
            style={{color: "white"}}>
              {featuredItem.vibeTags}
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;