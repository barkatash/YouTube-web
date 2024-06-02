import './WatchVideo.css'; 
import like from '../images/black-like.png';
import unlike from '../images/unlike.png';
import share from '../images/share.png';

function WatchVideo({video, title, uploader, visits, decription, uploadDate, likes}, {key}) {
  return (
    <div>
      <br></br>
      <div className="card mb-3 bg-light">
        <video key={key} controls className="video">
          <source src={video} type="video/mp4"></source>
        </video>
        <div className="card-body">
          <h5 className="card-title title-video-watch">{title}</h5>
          <h5 className="card-title uploader">{uploader}</h5>
          <div className="flex-container d-flex justify-content-end">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
                <img className="img" src={like}></img>&nbsp;&nbsp;{likes}
              </button>
              <button type="button" className="btn btn-secondary">
                <img className="img" src={unlike}></img>
              </button>
            </div>
            <button type="button" className="btn btn-secondary share">
              <img className="img" src={share}></img>
              &nbsp;&nbsp;Share
            </button>
          </div>
          <p className="card-text">{decription}</p>
          <p className="card-text">
            {visits} views &nbsp; {uploadDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchVideo;
