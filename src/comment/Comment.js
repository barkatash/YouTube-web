import "./Comment.css";
import { useState } from "react";
import signInUsers from "../db/signInUsers.json"

function Comment({
  setVideoComments,
  videoComments,
  commentId,
  userName,
  description,
  uploadDate,
  likes,
  userInfo,
  setUserInfo
}) {

  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [showTooltip, setShowTooltip] = useState(false);
  const isFromDb = (userInfo) => signInUsers.find(user => user.username === userInfo?.username) !== undefined
  const isLoggedIn = !!userInfo?.username;

  const updateLike = (newLikes) =>
    setVideoComments(
      videoComments.map((comment) => {
        if (comment.commentId === commentId) {
          return { ...comment, likes: newLikes };
        }
        return comment;
      })
    );

  const onDeleteComment = () => {
    setVideoComments(
      videoComments.filter((comment) => comment.commentId !== commentId)
    );
  };
  const onEditComment = () => {
    setIsEditing(true);
  };

  const onSaveComment = () => {
    setVideoComments(
      videoComments.map((comment) => {
        if (comment.commentId === commentId) {
          return { ...comment, description: newDescription };
        }
        return comment;
      })
    );
    setIsEditing(false);
  };
  const handleAlert = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);  
  }
  const handleCommentLike = () => {
    if (isLikedByUser) {
      const newCommentIdListLiked = userInfo.commentIdListLiked;
      newCommentIdListLiked.splice(userInfo.commentIdListLiked.indexOf(commentId), 1);
      setUserInfo({ ...userInfo, commentIdListLiked: newCommentIdListLiked });
      let newLikes = likes - 1;
      updateLike(newLikes);
      return;
    } else if (isUnLikedByUser) {
      const newCommentIdListUnLiked = userInfo.commentIdListUnliked;
      newCommentIdListUnLiked.splice(userInfo.commentIdListUnliked.indexOf(commentId), 1);
      setUserInfo({
        ...userInfo,
        commentIdListLiked: [...userInfo.commentIdListLiked, commentId],
        commentIdListUnliked: newCommentIdListUnLiked
      });
    } else
      setUserInfo({
        ...userInfo,
        commentIdListLiked: [...userInfo.commentIdListLiked, commentId],
      });
    let newLikes = likes + 1;
    updateLike(newLikes);
            
  }
  const handleCommentUnLike = () => {
    if (isUnLikedByUser) {
      const newCommentIdListUnLiked = userInfo.commentIdListUnliked;
      newCommentIdListUnLiked.splice(userInfo.commentIdListUnliked.indexOf(commentId), 1);
      setUserInfo({ ...userInfo, commentIdListUnliked: newCommentIdListUnLiked });
      return;
    } 
    if (isLikedByUser) {
      const newCommentIdListLiked = userInfo.commentIdListLiked;
      newCommentIdListLiked.splice(userInfo.commentIdListLiked.indexOf(commentId), 1);
      let newLikes = likes - 1;
      updateLike(newLikes);
      setUserInfo({
        ...userInfo,
        commentIdListUnliked: [...userInfo.commentIdListUnliked, commentId],
        commentIdListLiked: newCommentIdListLiked
      });
      return;
    } 
    if (!isUnLikedByUser) {
      setUserInfo({
        ...userInfo,
        commentIdListUnliked: [...userInfo.commentIdListUnliked, commentId],
      });
    }
  };
  const isLikedByUser = userInfo?.commentIdListLiked.includes(commentId);
  const isUnLikedByUser = userInfo?.commentIdListUnliked.includes(commentId);

  return (
    <div className="list-group-item flex-column ">
      <div>
        <div className="row">
          <div className="col-1 align-self-start">
              {userInfo?.image && userInfo.username === userName ? (
              <img className="username-image" src={isFromDb(userInfo) ? `${process.env.PUBLIC_URL}/${userInfo.image}` : userInfo.image}></img>
            ) : (
              <img className="username-image-default username-image"></img>
            )}
          </div>
          <div className="col-11">
            <div className="d-flex">
              <h6>{userName}</h6>
              &nbsp;
              <small>{uploadDate}</small>
              {userInfo?.username && (
                <div className="ms-auto d-flex">
                  <button
                    className="edit-comment btn comment-btn"
                    type="button"
                    onClick={() => onEditComment()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </button>
                  <button
                    className="delete-comment btn comment-btn"
                    type="button"
                    onClick={() => onDeleteComment()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <button
                  className="btn mt-2 ms-auto"
                  onClick={() => onSaveComment()}
                >
                  <p>Save</p>
                </button>
              </div>
            ) : (
              <p className="mb-1">{description}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex-box">
        <button
          type="button"
          className="btn comment-btn"
          onClick={() => isLoggedIn ? handleCommentLike() : handleAlert()}
        >
          <div className="like-p">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-hand-thumbs-up"
              viewBox="0 0 16 16"
            >
              <path
                d={`${
                  isLikedByUser
                    ? "M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
                    : "M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                }`}
              />{" "}
            </svg>
            &nbsp;&nbsp;<p>{likes}</p>
          </div>
        </button>
        <button
          type="button"
          className="btn comment-btn"
          onClick={() => isLoggedIn ? handleCommentUnLike() : handleAlert()}
        >
          <div className="like-p">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-hand-thumbs-down"
              viewBox="0 0 16 16"
            >
              <path
                d={`${
                  isUnLikedByUser
                    ? "M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"
                    : "M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"
                }`}
              />
            </svg>
          </div>
        </button>
      </div>
      {showTooltip && (
              <small className="alertLogin bg-light">
                Please log in to like or unlike this comment.
              </small>
            )}
    </div>
  );
}

export default Comment;
