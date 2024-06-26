import Comment from "../comment/Comment.js";

function CommentsList({ comments, setVideoComments, videoId, userInfo }) {
  return (
    <div>
      {comments
        .filter((comment) => comment.videoId === videoId)
        .map((comment, id) => (
          <Comment key={id} userInfo={userInfo} setVideoComments={setVideoComments} videoComments={comments} {...comment} />
        ))}
    </div>
  );
}

export default CommentsList;
