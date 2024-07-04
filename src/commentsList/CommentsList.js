import Comment from "../comment/Comment.js";

function CommentsList({
  videoComments,
  setVideoComments,
  userInfo,
  setUserInfo,
  allUsers
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
            allUsers={allUsers}
          />
        ))}
    </div>
  );
}

export default CommentsList;
