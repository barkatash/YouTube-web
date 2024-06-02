import comments from "../db/comments.json"
import Comment from "../comment/Comment.js"

function CommentsList() {
    return ( 
        <div>
        { comments.map((comment, id) => (
          <Comment key={id} {...comment}/>
        )) }
        </div>
    )
}

export default CommentsList;