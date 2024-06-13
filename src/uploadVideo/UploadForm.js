import React, { useEffect, useState } from "react";
import "./UploadForm.css";
import { useNavigate } from "react-router-dom";

function UploadForm({ allVideos, setAllVideos }) {
  const navigate = useNavigate();
  const onMoveToHomepage = () => {
    navigate("/");
  };
  const [formData, setFormData] = useState({
    video: null,
    title: "",
    description: "",
    id: 5,
    image: "",
    uploader: "",
    duration: "",
    visits: "0",
    uploadDate: "4 years ago",
    decription: "",
    likes: "0",
    categoryId: [0],
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the selected files
    setFormData((prevState) => ({
      ...prevState,
      videoFile: file,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setAllVideos([...allVideos, formData]);
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.videoFile) {
      const videoUrl = URL.createObjectURL(formData.videoFile); // Create URL for the selected video file
    }
    onMoveToHomepage();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-start add-video-form">
      <div className="mb-3 d-inline-block mx-auto w-75">
        <h1>Details</h1>
        <input
          type="file"
          accept="video/*,image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="mb-3 d-inline-block mx-auto w-75">
        <label className="form-label">Title:</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 d-inline-block mx-auto w-75">
        <label className="form-label">Description:</label>
        <textarea
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary btn-upload">
          Upload Video
        </button>
      </div>
    </form>
  );
}

export default UploadForm;
