import './Video.css'


function Video({ image, title, uploader, duration, visits, uploadDate }) {
    return (
      <div className="card card-video">
        <div className="card-body">
          <img className="video-image" src={image} alt=''></img>
          <div className='card-body-video'>
            <h6 className="card-title card-title-video">{title}</h6>
            <div className='card-text-video'>
              <p className="card-text">{uploader}</p>
              <p className="card-text">{visits} • {uploadDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Video;