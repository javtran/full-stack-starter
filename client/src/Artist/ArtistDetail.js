import { useState, useEffect } from 'react';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var AIRTABLE_URL2 = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%203';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';
var ARTIST_QUERY = 'field%5D=Artist&field%5D=Album_Image';

function ArtistDetail() {
  const [header, setHeader] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const path = window.location.pathname;
  const param = path.split('/')[2].split('&');

  useEffect(() => {
    fetch(`${AIRTABLE_URL}/${param[0]}?${KEY_QUERY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setHeader(actualData.fields);
        console.log(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setHeader(null);
      })
      .finally(() => {
        setLoading(false);
      });
    var tracklist = [];
    function fetchArtistTracks(offset) {
      const query = offset ? `${AIRTABLE_URL2}?${KEY_QUERY}&offset=${offset}` : `${AIRTABLE_URL2}?${KEY_QUERY}`;
      fetch(query)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`This is an HTTP error: The status is ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.records.length; i++) {
            if (data.records[i].fields['Artist_ID'] == param[1]) {
              tracklist.push(data.records[i]);
            }
          }
          if (data.offset !== undefined) {
            fetchArtistTracks(data.offset);
            return;
          } else {
            setTracks(tracklist);
          }
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setHeader(null);
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    }
    fetchArtistTracks(null);
  }, []);

  return (
    <div>
      {header && (
        <div>
          <a className="artist-image">
            <img src={header.Album_Image.split(',')[1]} alt="Artist" />
          </a>
          <a class="artist-name">{header.Artist}</a>
        </div>
      )}
    </div>
  );
}
export default ArtistDetail;
