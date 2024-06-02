import './VideoSidebar.css'
import videos from '../db/videos.json'

function VideoSidebar( { id, image, title, uploader, visits, duration, uploadDate, setWatchedVideo, setKey } ) {
    const changeWatchedVideo = () => {
        setWatchedVideo((videos.filter((video) => video.id === id)[0]));
        setKey(id)
    }
    return (
      <div className="container mt-3">
        <div className="d-flex align-items-start">
          <img
            src={image}
            className="img-fluid"
            alt="Image Description"
            style={{ maxWidth: "30%" }}
            onClick={changeWatchedVideo}
          />
          <div className="ml-3 ml-3-video-side-bar">
            <p className="card-title-sidebar mb-0">{title}</p>
            <p className="card-text-sidebar text-muted">{uploader}</p>
            <p className="card-text-sidebar">
              <small className="text-muted">
                {visits} • {uploadDate}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
}
export default VideoSidebar;