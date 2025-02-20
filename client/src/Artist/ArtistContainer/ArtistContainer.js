import { data } from 'jquery';
import { Link } from 'react-router-dom';

import './ArtistContainer.scss';

function ArtistContainer({ dataFromParent }) {
  // const { id, fields } = dataFromParent;
  // const { Artist, Album_Image, Artist_ID } = fields;
  const { id, Artist, Album_Image, Artist_ID } = dataFromParent;

  let array_image = Album_Image.split(',');
  return (
    <div class="artist-container">
      <Link to={'artists/' + id.toString() + '&' + Artist_ID}>
        <img className="artist-image" src={array_image[0]} alt="Artist" />
      </Link>
      <a className="artist-name" href="index.html?artists?${data.records[i].id}?{artistID}">
        {Artist}
      </a>
    </div>
  );
}

export default ArtistContainer;
