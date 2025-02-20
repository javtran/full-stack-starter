import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ArtistContainer from './ArtistContainer/ArtistContainer';
import UserForm from '../Users/UserForm';
import './Artist.scss';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';
var ARTIST_QUERY = 'field%5D=Artist&field%5D=Album_Image';

function Artist() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch(`${AIRTABLE_URL}?${KEY_QUERY}&${ARTIST_QUERY}`)
    fetch(`/api/playlists`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        // setData(actualData.records);
        let artistArray = [];
        let filteredData = [];
        for (let i = 0; i < actualData.length; i++) {
          if (!artistArray.includes(actualData[i].Artist_ID)) {
            artistArray.push(actualData[i].Artist_ID);
            filteredData.push(actualData[i]);
          }
        }
        setData(filteredData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <main className="container">
      <h1>Artists</h1>
      {loading && (
        <div className="loading">
          <span class="blob1 blob"></span>
          <span class="blob2 blob"></span>
          <span class="blob3 blob"></span>
        </div>
      )}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <div className="artist-content">
        {data &&
          // data.map(({ id, fields }, index) => (
          //   <div className="track-list-animation" style={{ '--animation-order': index }}>
          //     <ArtistContainer dataFromParent={{ id, fields }} />
          //   </div>
          // ))
          data.map((track, index) => (
            <div className="track-list-animation" style={{ '--animation-order': index }}>
              <ArtistContainer dataFromParent={track} />
            </div>
          ))}
      </div>
    </main>
  );
}

export default Artist;
