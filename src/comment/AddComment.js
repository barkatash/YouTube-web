import { useState } from "react";
import "./AddComment.css";

function AddComment({ comments, setVideoComments, videoId, isDarkMode }) {
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onCommentInput = (event) => {
    setComment(event.target.value);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    setVideoComments([
      ...comments,
      {
        videoId: videoId,
        userName: "?",
        decription: comment,
        uploadDate: "",
        likes: 0,
        dislikes: 0,
      },
    ]);
    setComment("");
    setIsFocused(false);
  };

  const onDeleteInput = () => {
    setComment("");
    setIsFocused(false);
  };

  return (
    <form
      role="search"
      onSubmit={onSubmitComment}
    >
      <div className="flex-container">
        <label>userName</label>
        <input
          onChange={onCommentInput}
          onFocus={onFocus}
          type="text"
          value={comment}
          className={`form-control mb-2 col-auto custom-input ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`}
          id="inlineFormInput"
          placeholder="Add a comment..."
        />
      </div>
      {isFocused && (
        <div className="flex-container flex-container-buttons">
          <div className="cancel">
            <button className="btn mb-2" type="button" onClick={onDeleteInput}>
              <p>Cancel</p>
            </button>
          </div>
          <button type="submit" className="btn mb-2">
            <p>Comment</p>
          </button>
        </div>
      )}
    </form>
  );
}

export default AddComment;
