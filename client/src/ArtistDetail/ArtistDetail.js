import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArtistDetailHeader from './ArtistDetailHeader/ArtistDetailHeader';
import AlbumComponent from './AlbumComponent/AlbumComponent';
import './ArtistDetail.scss';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var AIRTABLE_URL2 = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/tblVgfQMhyPCmBd8h';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';
var ARTIST_QUERY = 'field%5D=Artist&field%5D=Album_Image';

function ArtistDetail() {
  const [header, setHeader] = useState(null);
  const [albums, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const param = id.split('&');

  useEffect(() => {
    fetch(`/api/playlists/${param[0]}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        // setHeader(actualData.fields);
        setHeader(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setHeader(null);
      })
      .finally(() => {});
    var tracklist = [];
    // function fetchArtistTracks(offset) {
    //   const query = offset ? `${AIRTABLE_URL2}?${KEY_QUERY}&offset=${offset}` : `${AIRTABLE_URL2}?${KEY_QUERY}`;
    //   fetch(query)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`This is an HTTP error: The status is ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       for (var i = 0; i < data.records.length; i++) {
    //         if (data.records[i].fields['Artist_ID'] == param[1]) {
    //           tracklist.push(data.records[i]);
    //         }
    //       }
    //       if (data.offset !== undefined) {
    //         fetchArtistTracks(data.offset);
    //         return;
    //       } else {
    //         setAlbum(tracklist);
    //         setLoading(false);
    //         console.log(tracklist);
    //       }
    //       setError(null);
    //     })
    //     .catch((err) => {
    //       setError(err.message);
    //       setAlbum(null);
    //     })
    //     .finally(() => {});
    //   return;
    // }
    // fetchArtistTracks(null);
    fetch(`/api/albums`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].Artist_ID == param[1] && !tracklist.includes(data[i])) {
            tracklist.push(data[i]);
          }
        }
        console.log(tracklist);
        setAlbum(tracklist);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setAlbum(null);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="loading">
          <span class="blob1 blob"></span>
          <span class="blob2 blob"></span>
          <span class="blob3 blob"></span>
        </div>
      )}
      {header && albums && <ArtistDetailHeader header={header} />}
      {header && albums && <div className="sub-title">Artist's Work</div>}
      {header && albums && albums.map((album) => <AlbumComponent album={album} />)}
    </div>
  );
}
export default ArtistDetail;
