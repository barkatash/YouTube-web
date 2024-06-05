import { useEffect, useState } from "react";
import watch from "../images/youtubelogo.svg";
import "./Navbar.css";

function Navbar({ videoList, setVideoList, setIsDarkMode, isDarkMode }) {
  const [searchedVideo, setSearchedVideo] = useState("");
  const onSearchVideo = (event) => {
    setSearchedVideo(event.target.value);
  };
  useEffect(() => {
    //setVideoList(videoList.filter);
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

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 serach"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onSearchVideo}
            ></input>

            <button className="btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-search"
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
                  className={`sign-in btn-outline-secondary navbar-brand ${
                    isDarkMode ? "dark-mode" : "light-mode"
                  }`}
                  aria-current="page"
                  href="#"
                >
                  &nbsp;Sign in&nbsp;
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`mode btn-outline-secondary navbar-brand ${
                    isDarkMode ? "dark-mode" : "light-mode"
                  }`}
                  onClick={changeMode}
                >
                  &nbsp; Dark Mode &nbsp;
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
