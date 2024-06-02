import './ButtonCategory.css'; 

function ButtonCategory( {categoryName} ) {
    return (
        <button className="btn btn-sm btn-outline-secondary category-btn" type="button">
            &nbsp; {categoryName} &nbsp;
        </button>
    )
}

export default ButtonCategory;