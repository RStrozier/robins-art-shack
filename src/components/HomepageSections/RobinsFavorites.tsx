import { HiEmojiHappy } from "react-icons/hi";

const RobinsFavorites = () => {
  return (
    <>
      <div className="medium-container">
        <div className="robin-title-container">
          <div className="homepage-text">Robin's Favorites!</div>
          <div className="emoji-container">
            <HiEmojiHappy size={25} />
          </div>
        </div>

        <div className="robins-favorites-container">
          <div className="robin-favorite-item">
            <div className="robin-favorite-title">Robins favorite Title</div>
            <img alt="my-favorite-image"></img>
          </div>

          <div className="robin-favorite-item">
            <div className="robin-favorite-title">Robins favorite Title</div>
            <img alt="my-favorite-image"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default RobinsFavorites;
