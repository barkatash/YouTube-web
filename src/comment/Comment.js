import like from '../images/black-like.png';
import unlike from '../images/unlike.png';
import './Comment.css'

function Comment({userName, decription, uploadDate, likes, dislikes}) {
    return (
      <div className="list-group-item flex-column ">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{userName}</h5>
          <small>{uploadDate}</small>
        </div>
        <p className="mb-1">{decription}</p>
        <div className="flex-box">
        <button type="button" className="btn btn-secondary comment-btn">
          <img className="img" src={like}></img>&nbsp; {likes}
        </button>
        <button type="button" className="btn btn-secondary comment-btn">
          <img className="img" src={unlike}></img>&nbsp; {dislikes}
        </button>
        </div>
      </div>
    );
}

export default Comment;