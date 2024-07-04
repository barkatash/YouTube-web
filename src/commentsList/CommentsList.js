import Comment from "../comment/Comment.js";

function CommentsList({
  videoComments,
  setVideoComments,
  userInfo,
  setUserInfo
}) {

  return (
    <div>
      {videoComments.map((comment, id) => (
          <Comment
            key={id}
            setVideoComments={setVideoComments}
            videoComments={videoComments}
            {...comment}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        ))}
    </div>
  );
}

export default CommentsList;
