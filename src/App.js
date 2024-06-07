import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import { useState } from 'react';
import videos from './db/videos.json';
import Homepage from './Homepage.js';
import VideoPage from './VideoPage.js';
import CategoryNavbar from './category/CategoryNavbar.js';
import categories from "./db/categories.json"
import WatchVideo from './watchVideo/WatchVideo.js';
import AddComment from './comment/AddComment.js';
import CommentsList from './commentsList/CommentsList.js';
import VideoListSidebar from './videoSidebar/VideoListSidebar.js';
import UploadForm from './uploadVideo/UploadForm.js';

function App() {
  const [ matchedVideos, setmatchedVideos ] = useState(videos);


  return (
 <div className="App">
  <h1>YouTube Video Uploader</h1>
  <UploadForm />
</div>
  )
}

  // const [ matchedVideos, setmatchedVideos ] = useState(videos);

  // return (
  //   <div className="App">
  //     <Navbar matchedVideos={matchedVideos} setmatchedVideos={setmatchedVideos}/>
  //     {/* <div className="container-fluid text-center">
  //       <div className="row">
  //         <div className="col-2 vh-100 bg-light"><Sidebar /></div>
  //         <div className="col-10">
  //           <CategoryNavbar categories={categories}/>
  //           <VideoList matchedVideos={matchedVideos}/></div>
  //       </div>
  //     </div> */}
  //     <div className="container-fluid">
  //     <div className="row video-page">
  //       <div className="col-md-8">
  //         <WatchVideo {...videos[1]} />
  //         <AddComment />
  //         <CommentsList />
  //       </div>
  //       <div className="col-md-4">
  //         <VideoListSidebar />
  //       </div>
  //     </div>
  //   </div>
  //   </div>
  // );
// }

export default App;