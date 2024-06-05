import ButtonCategory from "../buttonCategory/ButtonCategory";
import './CategoryNavbar.css';


function CategoryNavbar({ categories, isDarkMode}) {
    return (
      <nav className="navbar">
        <form className="container-fluid justify-content-space-between buttons-navbar">
            { categories.map((category, id) => (
              <ButtonCategory className={`${isDarkMode ? "dark-mode" : "light-mode"}`} key={id} {...category}/>
            )) }
          
        </form>
      </nav>
    );
}

export default CategoryNavbar;