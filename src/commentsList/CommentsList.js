import Comment from "../comment/Comment.js";

function CommentsList({
  comments,
  setVideoComments,
  videoId,
  userInfo,
  setUserInfo,
}) {
  return (
    <div>
      {comments
        .filter((comment) => comment.videoId === videoId)
        .map((comment, id) => (
          <Comment
            key={id}
            setVideoComments={setVideoComments}
            videoComments={comments}
            {...comment}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        ))}
    </div>
  );
}

export default CommentsList;
