import { useState, useEffect } from 'react';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';
var ARTIST_QUERY = 'field%5D=Artist&field%5D=Album_Image';

function ArtistDetail() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const path = window.location.pathname
    const param = path.split("/")[2].split("&")
    console.log(param);
    useEffect(() => {
        fetch(`${AIRTABLE_URL}/${param[0]}?${KEY_QUERY}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            return response.json();
          })
          .then((actualData) => {
            setData(actualData.records);
            console.log(actualData);
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

    return (<div>artistdetail</div>)
}
export default ArtistDetail