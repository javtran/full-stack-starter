import { set } from 'lodash';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

import TrackContainer from './TrackContainer/TrackContainer';
import './Tracks.scss';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';
var TRACK_QUERY = 'field%5D=Artist&field%5D=Album_Image&field%5D=Album&field%5D=Duration&field%5D=Track';

function Tracks() {
  const { user } = useAuthContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // fetch(`${AIRTABLE_URL}?${KEY_QUERY}&${TRACK_QUERY}`)
    fetch(`/api/playlists`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        // setData(actualData.records);
        setData(actualData);
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
          <span className="blob1 blob"></span>
          <span className="blob2 blob"></span>
          <span className="blob3 blob"></span>
        </div>
      )}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <ul className="track-content">
        {user?.isAdmin && (
          <div>
            <li>
              <Link
                className="track-individual"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                to="/tracks/new">
                <span class="icon">
                  <i class="fa fa-plus fa-lg"></i>
                </span>
              </Link>
            </li>
          </div>
        )}
        {data &&
          // data.map(({ id, fields }, index) => (
          //   <div className="track-list-animation" style={{ '--animation-order': index }}>
          //     <TrackContainer dataFromParent={{ id, fields }} />
          //   </div>
          // ))
          data.map((track, index) => (
            <div className="track-list-animation" style={{ '--animation-order': index }}>
              <TrackContainer dataFromParent={track} />
            </div>
          ))}
      </ul>
    </main>
  );
}

export default Tracks;
