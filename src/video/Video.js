import { useNavigate } from "react-router-dom";
import "./Video.css";

function Video({ id, image, title, uploader, duration, visits, uploadDate }) {
  const navigate = useNavigate();

  const onMoveToVideo = () => {
    navigate(`/watch/${id}`);
  };

  const onDeleteVideo = () => {
    // Implement deletion logic here if needed
  };

  return (
    <div className="card card-video">
      <div className="card-body">
        <div className="position-relative">
          <img
            className="video-image"
            src={image}
            alt={title}
            onClick={onMoveToVideo}
          />
          <span className="duration">{duration}</span>
        </div>
        <div className="card-body-video">
          <h6 className="card-title card-title-video">{title}</h6>
          <div className="dropleft video-menu">
            <button
              type="button"
              className="video-menu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button" onClick={onDeleteVideo}>Delete</button>
              <button className="dropdown-item">Edit</button>
            </div>
          </div>
          <div className="card-text-video">
            <div className="d-flex">
              <p className="card-text">{uploader}</p>
            </div>
            <p className="card-text">
              {visits} • {uploadDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
