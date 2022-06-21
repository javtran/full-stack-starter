import { Link } from 'react-router-dom';

import './ArtistContainer.scss';

function ArtistContainer({ dataFromParent }) {
  const { id, fields } = dataFromParent;
  const { Artist, Album_Image, Artist_ID } = fields;
  let array_image = Album_Image.split(',');
  return (
    <div class="artist-container">
      <Link to= {"artists/" + id + "&" + Artist_ID}>
        <img className="artist-image" src={array_image[1]} alt="Artist" />
      </Link>
      <a className="artist-name" href="index.html?artists?${data.records[i].id}?{artistID}">
        {Artist}
      </a>
    </div>
  );
}

export default ArtistContainer;
