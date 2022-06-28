import { Link } from 'react-router-dom';

import './TrackContainer.scss';

function TrackContainer({ dataFromParent }) {
  const { id, fields } = dataFromParent;
  const { Artist, Album_Image, Album, Duration, Track } = fields;

  let array_image = Album_Image.split(',');
  var intDuration = parseInt(Duration);
  var minutes = Math.floor(intDuration / 60000);
  var seconds = Math.round((intDuration - minutes * 60000) / 1000);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return (
    <li>
      <Link className="track-individual" to={id}>
        <img className="track-image" src={array_image[0]} alt="Artist" />
        <div className="track-detail">
          <div className="row">
            <span className="col-6 d-flex flex-column">
              <div>{Track}</div>
              <div>{Artist}</div>
            </span>
            <span className="col-4 album-name">{Album}</span>
            <span className="col duration">
              {minutes}:{seconds}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default TrackContainer;
