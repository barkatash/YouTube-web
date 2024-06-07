import './ButtonCategory.css'; 

function ButtonCategory( {categoryName} ) {
    return (
        <button className="btn-outline-secondary category-btn" type="button">
            &nbsp; {categoryName} &nbsp;
        </button>
    )
}

export default ButtonCategory;