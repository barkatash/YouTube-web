import Sidebar from "./sidebar/Sidebar.js";
import VideoList from "./videoList/VideoList.js";
import RecommendedVideos from "./videoList/RecommendedVideos.js";
import CategoryNavbar from "./category/CategoryNavbar.js";
import "./Homepage.css";

function Homepage({
  recommendedVideos,
  matchedVideos,
  setMatchedVideos,
  isDarkMode,
  handleDeleteVideo,
  userInfo,
  setAllVideos,
  allVideos,
  rerenderVideos
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
          <RecommendedVideos 
            recommendedVideos={recommendedVideos}
            handleDeleteVideo={handleDeleteVideo}
            userInfo={userInfo}
            setAllVideos={setAllVideos}
            allVideos={allVideos}
            rerenderVideos={rerenderVideos}
          />
          <VideoList
            matchedVideos={matchedVideos}
            handleDeleteVideo={handleDeleteVideo}
            userInfo={userInfo}
            setAllVideos={setAllVideos}
            allVideos={allVideos}
            rerenderVideos={rerenderVideos}
          />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
