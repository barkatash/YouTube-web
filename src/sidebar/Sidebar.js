import './Sidebar.css'; 
import home from '../images/1946488.png'
import explore from '../images/magnifying-glass.svg';
import tranding from '../images/hot_fire_flame_trend_creative_trending_icon_212616.png'
import music from '../images/music.png'
import sports from '../images/sport.png'
import news from '../images/news.png'
import like from '../images/like.png'
import history from '../images/history.png'
import channel from '../images/channel.png'
import videos from '../images/video.png'

function Sidebar() {
  return (
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={home}></img>Home
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Explore
          <span className="badge text-bg-primary rounded-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={tranding}></img>Trending
          <span className="badge text-bg-primary rounded-pill">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={music}></img>Music
          <span className="badge text-bg-primary rounded-pill">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={news}></img>News
          <span className="badge text-bg-primary rounded-pill">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={sports}></img>Sports
          <span className="badge text-bg-primary rounded-pill">1</span>
        </li>
        <hr></hr>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          You   {'>'}
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={channel}></img>Your channel
          <span className="badge text-bg-primary rounded-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={history}></img>History
          <span className="badge text-bg-primary rounded-pill">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={videos}></img>Your videos
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <img className="small-logo" src={like}></img>Liked videos
          <span className="badge text-bg-primary rounded-pill">2</span>
        </li>
        <hr></hr>
      </ul>
  );
}

export default Sidebar;