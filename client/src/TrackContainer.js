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
      <a className="track-individual" href="index.html?tracks?${data.records[i].id}">
        <div>
          <img className="track-image" src={array_image[1]} alt="Artist" />
        </div>
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
      </a>
    </li>
  );
}

export default TrackContainer;
