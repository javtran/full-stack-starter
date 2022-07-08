import './TrackDetailHeader.scss';

function TrackDetailHeader({ prop }) {
  const { Album, Album_Image, Album_Date, Artist, Duration, Track } = prop;

  let array_image = Album_Image.split(',');
  let year = Album_Date.split('-');
  var intDuration = parseInt(Duration);
  var minutes = Math.floor(intDuration / 60000);
  var seconds = Math.round((intDuration - minutes * 60000) / 1000);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return (
    <div className="d-flex flex-row">
      <img className="track-header-image" src={array_image[0]} alt="Artist" />
      <div className="d-flex flex-column justify-content-end">
        <div className="track-header-name ">{Track}</div>
        <div className="track-header-detail">
          {Artist} • {year[0]} • {minutes} min {seconds} sec
        </div>
      </div>
    </div>
  );
}
export default TrackDetailHeader;
