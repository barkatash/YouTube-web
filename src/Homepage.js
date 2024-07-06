import Sidebar from "./sidebar/Sidebar.js";
import VideoList from "./videoList/VideoList.js";
import CategoryNavbar from "./category/CategoryNavbar.js";
import "./Homepage.css";

function Homepage({
  allVideos,
  matchedVideos,
  setMatchedVideos,
  isDarkMode,
  handleDeleteVideo,
  handleEditVideo,
  userInfo
}) {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar isDarkMode={isDarkMode} />
        </div>
        <div className="col-md-10">
          <div className="row">
            <CategoryNavbar
              allVideos={allVideos}
              matchedVideos={matchedVideos}
              setMatchedVideos={setMatchedVideos}
              isDarkMode={isDarkMode}
            />
          </div>
          <VideoList
            matchedVideos={matchedVideos}
            handleDeleteVideo={handleDeleteVideo}
            handleEditVideo={handleEditVideo}
            userInfo={userInfo}
          />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
