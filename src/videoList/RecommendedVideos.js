import "./RecommendedVideos.css";
import Video from "../video/Video";

function RecommendedVideos({ recommendedVideos, handleDeleteVideo, userInfo, setAllVideos, allVideos, rerenderVideos }) {
    return (
        <div className="videos">
            <h3 className="recommended-videos">Recommended Videos For You</h3>
            <br></br><hr></hr>
            {recommendedVideos.map((video, id) => (
                <Video
                key={id}
                {...video}
                handleDeleteVideo={handleDeleteVideo}
                userInfo={userInfo}
                setAllVideos={setAllVideos}
                allVideos={allVideos}
                rerenderVideos={rerenderVideos}
                />
            ))}
        </div>
    )
}
export default RecommendedVideos;