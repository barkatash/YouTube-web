import React, { useState } from "react";
import "./UploadForm.css";
import { useNavigate } from "react-router-dom";
import watch from "../images/youtubelogo.svg";
import { Link } from "react-router-dom";

function UploadForm({ allVideos, setAllVideos }) {
  const navigate = useNavigate();
  const onMoveToHomepage = () => {
    navigate("/");
  };
  const [activeTab, setActiveTab] = useState("Details");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    video: null,
    title: "",
    description: "",
    id: allVideos.length + 1,
    image: "",
    uploader: "",
    duration: "",
    visits: "0",
    uploadDate: "now",
    likes: "0",
    categoryId: [0],
  });

  const handleVideoChange = (event) => {
    const video = event.target.files[0].name;
    setFormData((prevState) => ({
      ...prevState,
      video: `videos/${video}`,
    }));
    setSelectedVideo(video);
  };
  const handleImageChange = (event) => {
    const img = event.target.files[0].name;
    setFormData((prevState) => ({
      ...prevState,
      image: img,
    }));
    setSelectedImage(img);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setAllVideos([...allVideos, formData]);
    onMoveToHomepage();
  };

  return (
    <div>
      <h2 className="card-header">
        <Link to="/">
          <img className="upload-logo" src={watch}></img>
        </Link>
        &nbsp;Upload video
      </h2>

      <form
        onSubmit={handleSubmit}
        className="card card-upload mt-4 text-start add-video-form"
      >
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "Details" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleTabClick("Details")}
              >
                Details
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Link1" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("Link1")}
              >
                Checks
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Link2" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("Link2")}
              >
                Visibility
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === "Details" && (
              <div>
                <h3>Details</h3>
                <input
                  type="file"
                  id="fileInput"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ display: "none" }}
                />

                <label
                  htmlFor="fileInput"
                  style={{
                    lineHeight: "1.2",
                    padding: "15px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {selectedVideo === null && (
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
                      &nbsp; &nbsp; Select video to upload{" "}
                    </div>
                  )}
                  {selectedVideo && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                      </svg>
                      &nbsp; &nbsp; Change video file{" "}
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="fileInput2"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

                <label
                  htmlFor="fileInput2"
                  style={{
                    lineHeight: "1.2",
                    padding: "15px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {selectedImage === null && (
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
                  )}
                  {selectedImage && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                      </svg>
                      &nbsp;&nbsp; Change image
                    </div>
                  )}
                </label>

                <div className="mb-3 d-inline-block mx-auto w-75">
                  <div className="input-with-label">
                    <label className="form-label">Title:</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-3 d-inline-block mx-auto w-75">
                  <div className="input-with-label">
                    <label className="form-label">Description:</label>
                    <br />
                    <textarea
                      className="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="text-end mt-3">
                  <button
                    type="button"
                    className="btn-upload"
                    onClick={() => handleTabClick("Link1")}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {activeTab === "Link1" && (
              <div>
                <h3>Checks</h3>
                <p>
                  We'll check your video for issues that may restrict its
                  visibility and then you will have the opportunity to fix
                  issues before publishing your video.{" "}
                  <a href="#" className="link">
                    Learn more
                  </a>
                </p>
                <p className="section-title">Copyright</p>
                <p>No issues found</p>
                <p>
                  Remember: These check results aren’t final. Issues may come up
                  in the future that impact your video.{" "}
                  <a href="#" className="link">
                    Learn more
                  </a>
                </p>
                <div className="text-end mt-3">
                  <button
                    type="button"
                    className="btn-upload"
                    onClick={() => handleTabClick("Link2")}
                  >
                    Next
                  </button>
                </div>
                <br></br>
                <br></br>
                <p className="small">
                  By submitting your videos to YouTube, you acknowledge that you
                  agree to YouTube's Terms of Service and Community Guidelines.
                </p>
                <p className="small">
                  Please be sure not to violate others' copyright or privacy
                  rights.
                </p>
              </div>
            )}
            {activeTab === "Link2" && (
              <div>
                <div>
                  <h3>Visibility</h3>
                  <p>Choose who can see your video</p>
                  <p>Make your video public, unlisted, or private</p>

                  <div className="visibility-option">
                    <input
                      type="radio"
                      id="private"
                      name="visibility"
                      value="private"
                    ></input>
                    <div>
                      <h4>Private</h4>
                      <p>Only you and people you choose can watch your video</p>
                    </div>
                  </div>

                  <div className="visibility-option">
                    <input
                      type="radio"
                      id="unlisted"
                      name="visibility"
                      value="unlisted"
                    ></input>
                    <div>
                      <h4>Unlisted</h4>
                      <p>Anyone with the video link can watch your video</p>
                    </div>
                  </div>

                  <div className="visibility-option">
                    <input
                      type="radio"
                      id="public"
                      name="visibility"
                      value="public"
                    ></input>
                    <div>
                      <h4>Public</h4>
                      <p>Everyone can watch your video</p>
                    </div>
                  </div>
                </div>

                <div className="text-end mt-3">
                  <button
                    type="submit"
                    className="btn-upload"
                    onClick={() => handleSubmit}
                  >
                    Upload
                  </button>
                </div>
              </div>
            )}
            <br></br>
            <br></br>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
