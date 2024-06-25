import { useState } from "react";
import "./AddComment.css";

function AddComment({
  comments,
  setVideoComments,
  videoId,
  isDarkMode,
  userInfo,
}) {
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;

  const onFocus = () => {
    setIsFocused(true);
  };

  const onCommentInput = (event) => {
    setComment(event.target.value);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    setVideoComments([
      {
        commentId: comments.length + 1,
        videoId: videoId,
        userName: userInfo?.displayName ? userInfo?.displayName : "username",
        description: comment,
        uploadDate: "now",
        likes: 0,
        dislikes: 0,
      },
      ...comments,
    ]);
    setComment("");
    setIsFocused(false);
  };

  const onDeleteInput = () => {
    setComment("");
    setIsFocused(false);
  };

  return (
    <form role="search" onSubmit={onSubmitComment}>
      <div className="flex-container">
        {userInfo?.image ? (
          <img className="username-image" src={`${publicUrl}/${userInfo.image}`}></img>
        ) : (
          <img className="username-image"></img>
        )}
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
