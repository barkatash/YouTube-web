import './Video.css'


function Video({ image, title, uploader, duration, visits, uploadDate }) {
    return (
      <div className="card">
        <div className="card-body">
          <img className="video-image" src={image} alt=''></img>
          <br></br>
          <p className="card-title">{title}</p>
          <p className="card-subtitle mb-2 text-body-secondary">{uploader}</p>
          <p className="card-text">{duration}</p>
          <p className="card-text">{visits} • {uploadDate}</p>
          <p className="card-text"></p>
        </div>
      </div>
    );
}

export default Video;