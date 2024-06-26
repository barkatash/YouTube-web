import React, { useState } from "react";
import "./EditVideoModal.css";

function EditVideoModal({ video, handleSave, handleClose }) {
  const [updatedVideo, setUpdatedVideo] = useState({ ...video });
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVideo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'image') {
      setImageFile(files[0]);
    } else if (name === 'video') {
      setVideoFile(files[0]);
    }
  };

  const onSave = () => {
    const videoData = { ...updatedVideo };
    if (imageFile) {
      videoData.image = URL.createObjectURL(imageFile);
    }
    if (videoFile) {
      videoData.video = URL.createObjectURL(videoFile);
    }
    handleSave(videoData);
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content modal-content-video">
          <div className="modal-header">
            <h5 className="modal-title">Edit Video</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={updatedVideo.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  id="fileInput2"
                  accept="image/*"
                  name="image"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                <label htmlFor="fileInput2" className="file-input-label">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      className="bi bi-upload upload"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    &nbsp;&nbsp; Select image to upload
                  </div>
                </label>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  id="fileInput"
                  accept="video/*"
                  name="video"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                <label htmlFor="fileInput" className="file-input-label">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      className="bi bi-upload upload"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    &nbsp; &nbsp; Select video to upload
                  </div>
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  value={updatedVideo.duration}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVideoModal;
