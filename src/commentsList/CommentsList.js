import Comment from "../comment/Comment.js";

function CommentsList({
  videoComments,
  setVideoComments,
  userInfo,
  setUserInfo,
}) {
  return (
    <div>
      {videoComments.map((comment, id) => (
        <Comment
          key={id}
          setVideoComments={setVideoComments}
          videoComments={videoComments}
          _id={comment._id}
          userName={comment.userName}
          description={comment.description}
          uploadDate={comment.uploadDate}
          likes={comment.likes}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      ))}
    </div>
  );
}

export default CommentsList;
