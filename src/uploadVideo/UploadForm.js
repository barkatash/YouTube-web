import React, { useState } from "react";
import "./UploadForm.css";
import { useNavigate } from "react-router-dom";
import watch from "../images/youtubelogo.svg";
import { Link } from "react-router-dom";

function UploadForm({ allVideos, setAllVideos, userInfo }) {
  const navigate = useNavigate();
  const onMoveToHomepage = () => {
    navigate("/");
  };

  const [activeTab, setActiveTab] = useState("Details");
  const handleTabClick = (tab) => {
    // if (tab === "Link1" && (!formData.video || !formData.title || !formData.image )) {
    //   alert("Please fill out all details and upload a video before proceeding.");
    //   return;
    // }
    setActiveTab(tab);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const maxId = Math.max(...allVideos.map(video => video.id), 0) + 1;

  const [formData, setFormData] = useState({
    video: null,
    title: "",
    description: "",
    id: maxId,
    image: "",
    uploader: userInfo?.displayName ? userInfo?.displayName : "username",
    duration: "",
    visits: 0,
    uploadDate: "",
    likes: 0,
    categoryId: [0],
  });

  const handleVideoChange = (event) => {
    const videoFile = event.target.files[0];
    if (videoFile) {
      const videoUrl = URL.createObjectURL(videoFile);
      setFormData((prevState) => ({
        ...prevState,
        video: videoUrl,
      }));
      setSelectedVideo(videoFile);
    }
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setFormData((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
      setSelectedImage(imageFile);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      const token = userInfo.token;
      const response = await fetch(
        `http://localhost:8080/api/users/${userInfo.username}/videos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(formData),
        }
      );
      const json = await response.json();
      if (json.errors) {
        alert("You need to login to upload a video");
        return;
      }
      event.preventDefault();
      setAllVideos([...allVideos, formData]);
      onMoveToHomepage();

    } catch (error) {
      console.error("Error edit video:", error);
      alert("An error occurred while editing the video.");
    }
  };

  return (
    <div>
      <div>
      <h2 className="">
        <Link to="/">
          <img className="upload-logo" src={watch} alt="YouTube Logo" />
        </Link>
        &nbsp;Upload video
      </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="card card-upload mt-4 text-start add-video-form upload-form-page"
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
                className={`nav-link ${
                  activeTab === "Link1" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleTabClick("Link1")}
              >
                Checks
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "Link2" ? "active" : ""
                }`}
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
                <br></br>
                <input
                  type="file"
                  id="fileInput"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ display: "none" }}
                />

                <label
                  htmlFor="fileInput"
                  className="file-input-label"
                >
                  {selectedVideo === null ? (
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
                  ) : (
                    <div>
                      <video controls className="file-preview">
                        <source src={formData.video} type="video/mp4" />
                      </video>
                      &nbsp;&nbsp; <p>Change video file</p>
                    </div>
                  )}
                </label>

                <br></br><br></br>

                <input
                  type="file"
                  id="fileInput2"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

                <label
                  htmlFor="fileInput2"
                  className="file-input-label"
                >
                  {selectedImage === null ? (
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
                  ) : (
                    <div>
                      <img src={formData.image} alt="Selected" className="file-preview" />
                      &nbsp;&nbsp;<p>Change image</p>
                    </div>
                  )}
                </label>
                <br></br>
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
                <br /><br /><br />
                <p className="small">
                  By submitting your videos to YouTube, you acknowledge that you
                  agree to YouTube's Terms of Service and Community Guidelines.
                </p>
                <p className="small">
                  Please be sure not to violate others' copyright or privacy
                  rights.
                </p>
                <br /><br /><br />
                <div className="text-end mt-3">
                  <button
                    type="button"
                    className="btn-upload"
                    onClick={() => handleTabClick("Link2")}
                  >
                    Next
                  </button>
                </div>

              </div>
            )}

            {activeTab === "Link2" && (
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
                  />
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
                  />
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
                  />
                  <div>
                    <h4>Public</h4>
                    <p>Everyone can watch your video</p>
                  </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="text-end mt-3">
                  <button type="submit" className="btn-upload">
                    Upload
                  </button>
                </div>
              </div>
            )}
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
