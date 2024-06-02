import './WatchVideo.css'; 
import like from '../images/black-like.png';
import unlike from '../images/unlike.png';

function WatchVideo({video, title, uploader, duration, visits, uploadDate}) {
  return (
    <div>
        <br></br>
      <div className="card mb-3 bg-light">
        <video controls className="video">
          <source src="/videos/video1.mp4" type="video/mp4"></source>
        </video>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <div className="flex-container">
            <h5 className="card-title">uploader</h5>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary"><img className="img" src={like}></img></button>
                <button type="button" className="btn btn-secondary"><img className="img" src={unlike}></img></button>
            </div>
            &nbsp;&nbsp;
            <button type="button" className="btn btn-secondary share">Share</button>
          </div>
          <br></br>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchVideo;
