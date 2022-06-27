import './ArtistDetailHeader.scss';

function ArtistDetailHeader({ header }) {
  const img_src = header.Album_Image.split(',')[0];
  const artist_name = header.Artist;
  return (
    <div>
      <a>
        <img className="artist-image" src={img_src} alt="Artist" />
      </a>
      <a className="artist-detail-name">{artist_name}</a>
    </div>
  );
}
export default ArtistDetailHeader;
