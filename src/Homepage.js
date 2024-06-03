import categories from "./db/categories.json"
import Sidebar from './sidebar/Sidebar.js';
import VideoList from './videoList/VideoList.js';
import CategoryNavbar from './category/CategoryNavbar.js';
import './Homepage.css'

function Homepage({matchedVideos}) {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <CategoryNavbar categories={categories} />
            </div>
            <VideoList matchedVideos={matchedVideos} />
          </div>
        </div>
      </div>
    );
}
export default Homepage;