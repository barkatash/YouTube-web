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
      <button type="submit" className="btn mb-2">
          Cancel
        </button>
        <button type="submit" className="btn mb-2">
          Comment
        </button>
      </div>
    </form>
  );
}

export default AddComment;