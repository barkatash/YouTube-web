import ButtonCategory from "../buttonCategory/ButtonCategory";
import './CategoryNavbar.css';


function CategoryNavbar({ categories }) {
    return (
      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-space-between buttons-navbar">
            { categories.map((category, id) => (
              <ButtonCategory key={id} {...category}/>
            )) }
          
        </form>
      </nav>
    );
}

export default CategoryNavbar;