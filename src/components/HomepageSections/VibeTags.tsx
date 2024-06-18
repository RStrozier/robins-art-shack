import tagData from "../../data/vibe-tags.json";

const VibeTags = () => {
  var tag = tagData;
  console.log(tag);

  var tagName = tag[0].name;
  console.log(tagName);

  var tagColor = tag[0].color;
  console.log(tagColor);

  return (
    <>
      <div className="homepage-text poppins-medium">Vibe Tags</div>
      <div className="vibe-tags-container">
        {/* map through each tag and display name and tag color */}
        {tagData.map((tag, index) => (
          <div
            key={index}
            className="home-vibe-tag poppins-regular"
            style={{ backgroundColor: tag.color, color: "white", border: "outset" }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default VibeTags;
