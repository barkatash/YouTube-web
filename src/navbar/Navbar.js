import { useEffect, useState } from "react";
import watch from "../images/youtubelogo.svg";
import "./Navbar.css";

function Navbar({ videoList, setMatchedVideos, setIsDarkMode, isDarkMode }) {
  const [searchedVideo, setSearchedVideo] = useState("");
  const [input, setInput] = useState("");
  
  const onKeyboardInput = (event) => {
    setInput(event.target.value);
  };

  const onSearchVideo = () => {
    setSearchedVideo(input);
  };

  useEffect(() => {
    const pattern = new RegExp(`^${searchedVideo}`, "i");
    setMatchedVideos(videoList.filter((video) => pattern.test(video.title)));
  }, [searchedVideo]);

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav className="navbar navbar-expand">
        <div className="container-fluid container-fluid-navbar navbar-expand">
          <a
            className={`navbar-brand ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
            href="#"
          >
            <img className="logo" src={watch}></img> YouTube
          </a>

          <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); onSearchVideo(); }}>
            <input
              className="form-control me-2 serach"
              onChange={onKeyboardInput}
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>

            <button
              className="btn btn-search"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
              >
                <button
                  className={`sign-in navbar-brand ${
                    isDarkMode ? "dark-mode" : "light-mode"
                  }`}
                  aria-current="page"
                  href="#"
                >
                  &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  &nbsp;Sign in&nbsp;
                </button>
              </li>
              <li className="nav-item">
                <button className="mode navbar-brand" onClick={changeMode}>
                  &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-sun"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d={`${
                        isDarkMode
                          ? "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
                          : "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
                      }`}
                    />
                  </svg>
                  &nbsp;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
