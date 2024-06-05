import './AddComment.css'

function AddComment() {
  return (
    <form>
      <div className="flex-container">
        <label>userName</label>
        <input
          type="text"
          className="form-control mb-2 col-auto custom-input"
          id="inlineFormInput"
          placeholder="Add a comment..."></input>
      </div>
      <div className="flex-container flex-container-buttons">
        <div className='cancel'>
        <button type="submit" className="btn mb-2">
          <p>Cancel</p>
        </button>
        </div>
        <button type="submit" className="btn mb-2">
          <p>Comment</p>
        </button>
      </div>
    </form>
  );
}

export default AddComment;