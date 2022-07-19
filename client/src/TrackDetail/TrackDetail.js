import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TrackDetailHeader from './TrackDetailHeader/TrackDetailHeader';
import './TrackDetail.scss';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';

function TrackDetail() {
  const key_list = {
    0: 'C',
    1: 'C♯/D♭',
    2: 'D',
    3: 'D♯/E♭',
    4: 'E',
    5: 'F',
    6: 'F♯/G♭',
    7: 'G',
    8: 'G♯/A♭',
    9: 'A',
    10: 'A♯/B♭',
    11: 'B',
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // fetch(`${AIRTABLE_URL}/${id}?${KEY_QUERY}`)
    fetch(`/api/playlists/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        // setData(actualData.fields);
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
  }, [id]);
  return (
    <main className="container">
      <div>{data && <TrackDetailHeader prop={data} />}</div>
      <div className="row d-flex justify-content-center"></div>
      {data && (
        <div className="circle__row">
          <div className="circle">
            <div className="circle--title">Tempo</div>
            <div className="circle--text">{data.Tempo} BPM</div>
          </div>
          <div className="circle">
            <div className="circle--title">Key</div>
            <div className="circle--text">{key_list[data.Key]}</div>
          </div>
          <div className="circle">
            <div className="circle--title">Popularity</div>
            <div className="circle--text">{data.Track_Popularity}%</div>
          </div>
          <div className="circle">
            <div className="circle--title">Energy</div>
            <div className="circle--text">
              {(data.Energy * 100) % 1 == 0 ? (data.Energy * 100).toFixed() : (data.Energy * 100).toFixed(2)}%
            </div>
          </div>
          <div className="circle">
            <div className="circle--title">Acousticness</div>
            <div className="circle--text">
              {(data.Acousticness * 100) % 1 == 0 ? (data.Acousticness * 100).toFixed() : (data.Acousticness * 100).toFixed(2)}%
            </div>
          </div>
          <div className="circle">
            <div className="circle--title">Danceability</div>
            <div className="circle--text">
              {(data.Danceability * 100) % 1 == 0 ? (data.Danceability * 100).toFixed() : (data.Danceability * 100).toFixed(2)}%
            </div>
          </div>
          <div className="circle">
            <div className="circle--title">Liveness</div>
            <div className="circle--text">
              {(data.Liveness * 100) % 1 == 0 ? (data.Liveness * 100).toFixed() : (data.Liveness * 100).toFixed(2)}%
            </div>
          </div>
          <div className="circle">
            <div className="circle--title">Speechiness</div>
            <div className="circle--text">
              {(data.Speechiness * 100) % 1 == 0 ? (data.Speechiness * 100).toFixed() : (data.Speechiness * 100).toFixed(2)}%
            </div>
          </div>
          <div className="circle">
            <div className="circle--title">Loudness</div>
            <div className="circle--text">{data.Loudness} dB</div>
          </div>
        </div>
      )}
    </main>
  );
}

export default TrackDetail;
