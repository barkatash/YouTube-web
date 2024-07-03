import ButtonCategory from "../buttonCategory/ButtonCategory";
import "./CategoryNavbar.css";

function CategoryNavbar({ allVideos, categories, matchedVideos, setMatchedVideos, isDarkMode }) {
  return (
    <nav className="navbar">
      <form className="container-fluid justify-content-space-between buttons-navbar">
        {categories.map((category, id) => (
          <ButtonCategory
            className={`${isDarkMode ? "dark-mode" : "light-mode"}`}
            key={id}
            {...category}
            allVideos={allVideos}
            matchedVideos={matchedVideos}
            setMatchedVideos={setMatchedVideos}
          />
        ))}
      </form>
    </nav>
  );
}

export default CategoryNavbar;
