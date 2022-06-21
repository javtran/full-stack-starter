import { useState, useEffect } from 'react';

import TrackContainer from './TrackContainer';
import './Tracks.scss';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';
var TRACK_QUERY = 'field%5D=Artist&field%5D=Album_Image&field%5D=Album&field%5D=Duration&field%5D=Track';

function Tracks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${AIRTABLE_URL}?${KEY_QUERY}&${TRACK_QUERY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.records);
        console.log(data);
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
      <h1>Tracks</h1>
      {loading && (
        <div className="loading">
          <span class="blob1 blob"></span>
          <span class="blob2 blob"></span>
          <span class="blob3 blob"></span>
        </div>
      )}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <ul className="track-content">{data && data.map(({ id, fields }) => <TrackContainer dataFromParent={{ id, fields }} />)}</ul>
    </main>
  );
}

export default Tracks;
