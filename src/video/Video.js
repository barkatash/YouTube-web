import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Video.css';
import EditVideoModal from './EditVideoModal';

function Video({
  id,
  image,
  title,
  uploader,
  duration,
  visits,
  uploadDate,
  handleDeleteVideo,
  handleEditVideo,
  userInfo
}) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const onMoveToVideo = () => {
    navigate(`/watch/${id}`);
  };

  const onDeleteVideo = () => {
    handleDeleteVideo(id);
  };

  const onEditVideo = () => {
    setIsEditing(true);
  };

  const handleSave = (formData) => {
    handleEditVideo(id, formData);
    setIsEditing(false);
  };

  const handleClose = () => {
    setIsEditing(false);
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
          {userInfo?.username && <div className="dropstart video-menu">
            <button
              type="button"
              className="video-menu"
              data-bs-toggle="dropdown"
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
            <ul className="dropdown-menu dropdown-menu-video">
              <li>
                <button
                  className="dropdown-menu-video-btn"
                  type="button"
                  onClick={onDeleteVideo}
                >
                  Delete
                </button>
              </li>
              <li>
                <button className="dropdown-menu-video-btn" type="button" onClick={onEditVideo}>
                  Edit
                </button>
              </li>
            </ul>
          </div>}
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
      {isEditing && (
        <EditVideoModal
          video={{ id, image, title, uploader, duration, visits, uploadDate }}
          handleSave={handleSave}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default Video;