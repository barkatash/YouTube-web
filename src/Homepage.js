import categories from "./db/categories.json"
import Sidebar from './sidebar/Sidebar.js';
import VideoList from './videoList/VideoList.js';
import CategoryNavbar from './category/CategoryNavbar.js';

function Homepage({matchedVideos}) {
    return (
        <div className="container-fluid text-center">
        <div className="row">
          <div className="col-2 vh-100 bg-light"><Sidebar /></div>
          <div className="col-10">
            <CategoryNavbar categories={categories}/>
            <VideoList matchedVideos={matchedVideos}/></div>
        </div>
      </div>
    )
}
export default Homepage;