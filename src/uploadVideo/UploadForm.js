import React, { useEffect, useState } from "react";
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
  const [selectedFile, setSelectedFile] = useState(null);
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
    const file = event.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      videoFile: file,
    }));
    setSelectedFile(file);
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
                  onChange={handleFileChange}
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
                  &nbsp;&nbsp; Select video to upload
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
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
                <br></br><br></br>
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
