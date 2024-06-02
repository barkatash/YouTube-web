import Comment from "../comment/Comment.js"

function CommentsList( { comments }) {
    return ( 
        <div>
        { comments.map((comment, id) => (
          <Comment key={id} {...comment}/>
        )) }
        </div>
    )
}

export default CommentsList;