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
  const onFocus = () => {
    setIsFocused(true);
  };

  const onCommentInput = (event) => {
    setComment(event.target.value);
  };

  const onSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const token = userInfo.token;
      const commentData = {
        description: comment,
      }
      console.log(userInfo.username)
      const response = await fetch(
        `http://localhost:8080/api/comments/user/${userInfo.username}/${videoId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(commentData),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.errors) {
        alert("You need to login to add a comment");
        return;
      }
      setVideoComments([
        {
          videoId: json.videoId,
          userName: json.userName,
          description: json.description,
          uploadDate: json.uploadDate,
          likes: 0,
          dislikes: 0,
        },
        ...comments,
      ]);
      setComment("");
      setIsFocused(false);
    } catch (error) {
      console.error("Error edit video:", error);
      alert("An error occurred while adding your comment.");
    }
  };

  const onDeleteInput = () => {
    setComment("");
    setIsFocused(false);
  };

  return (
    <form role="search" onSubmit={onSubmitComment}>
      <div className="flex-container">
        {userInfo?.image ? (
          <img className="username-image" alt="" src={`http://localhost:8080/${userInfo.image}`}></img>
        ) : (
          <img className="username-image" alt=""></img>
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
