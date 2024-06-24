import React, { useState } from 'react';
import './EditVideoModal.css';

function EditVideoModal({ video, handleSave, handleClose }) {
  const [updatedVideo, setUpdatedVideo] = useState({ ...video });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVideo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSave = () => {
    handleSave(updatedVideo);
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Video</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" name="title" value={updatedVideo.title} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input type="text" className="form-control" name="image" value={updatedVideo.image} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Video URL</label>
                <input type="text" className="form-control" name="video" value={updatedVideo.video} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Duration</label>
                <input type="text" className="form-control" name="duration" value={updatedVideo.duration} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Visits</label>
                <input type="number" className="form-control" name="visits" value={updatedVideo.visits} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Upload Date</label>
                <input type="text" className="form-control" name="uploadDate" value={updatedVideo.uploadDate} onChange={handleChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={onSave}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVideoModal;
