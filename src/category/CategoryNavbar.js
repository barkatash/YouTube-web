import ButtonCategory from "../buttonCategory/ButtonCategory";
import { useEffect, useState } from "react";
import "./CategoryNavbar.css";

function CategoryNavbar({ allVideos, matchedVideos, setMatchedVideos, isDarkMode }) {
  const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/categories/");
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      };
      fetchCategories();
    }, []);
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
