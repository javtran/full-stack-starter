import './AlbumComponent.scss';

function AlbumComponent({ album }) {
  return (
    <div className="album-container">
      <img className="album-image" src={album.fields.Image} alt="Artist" />
      <div>
        <a className="album-title">{album.fields.Album_Name}</a>
        <div className="color-title">Type: {album.fields.Album_Type}</div>
        <div className="color-title">Tracks: {album.fields.Track_Number} Songs</div>
        <div className="color-title">Date: {album.fields.Release_Date}</div>
      </div>
    </div>
  );
}
export default AlbumComponent;
