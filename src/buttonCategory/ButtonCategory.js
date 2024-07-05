import "./ButtonCategory.css";

function ButtonCategory({categoryId, categoryName, allVideos, matchedVideos, setMatchedVideos}) {
  const onSelectCategory = () =>
    {
       setMatchedVideos(
        allVideos.filter(video => video.categoryId.includes(categoryId))
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
