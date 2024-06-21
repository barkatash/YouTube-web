import "./ButtonCategory.css";
import videos from "../db/videos.json";

function ButtonCategory({categoryId, categoryName, matchedVideos, setMatchedVideos}) {
  const onSelectCategory = () =>
    {
        setMatchedVideos(
        videos.filter(video => video.categoryId.includes(categoryId))
    );}

  return (
    <button
      className="btn-outline-secondary category-btn"
      onClick={onSelectCategory}
      type="button"
    >
      &nbsp; {categoryName} &nbsp;
    </button>
  );
}

export default ButtonCategory;
