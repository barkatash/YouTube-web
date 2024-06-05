import { useState } from 'react';
import './AddComment.css'

function AddComment({comments, setVideoComments, videoId}) {
  const [comment, setComment] = useState("");
  const onCommentInput = (event) => {
    setComment(event.target.value);
  }
  const onSubmitComment = () => {
    console.log(comments);
    setVideoComments([...comments, {
      "videoId": videoId,
      "userName": "?",
      "decription": comment,
      "uploadDate": "",
      "likes": 0,
      "dislikes": 0
    }]);
  }
  return (
    <form>
      <div className="flex-container">
        <label>userName</label>
        <input
          onChange={onCommentInput}
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
        <button type="submit" className="btn mb-2" onClick={onSubmitComment}>
          <p>Comment</p>
        </button>
      </div>
    </form>
  );
}

export default AddComment;