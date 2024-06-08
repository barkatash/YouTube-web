import './VideoSidebar.css'
import { useNavigate } from 'react-router-dom';

function VideoSidebar( { id, image, title, uploader, visits, duration, uploadDate, setKey} ) {

  const navigate = useNavigate();
    const changeWatchedVideo = () => {
        navigate(`/watch/${id}`);
        setKey(id);
    }
    return (
      <div className="container mt-3">
        <div className="d-flex align-items-start">
          <img
            src={`${process.env.PUBLIC_URL}/${image}`}
            className="img-fluid"
            alt="Image Description"
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