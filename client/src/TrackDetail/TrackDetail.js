import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TrackDetailHeader from './TrackDetailHeader/TrackDetailHeader';

var AIRTABLE_URL = 'https://api.airtable.com/v0/appPCKY59FaMZWsi4/Table%201';
var KEY_QUERY = 'api_key=key8nUdblw0IguYvd';

function TrackDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${AIRTABLE_URL}/${id}?${KEY_QUERY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.fields);
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
      <div>{data && <TrackDetailHeader prop={data} />}</div>
      <div className="row d-flex justify-content-center"></div>
    </main>
  );
}

export default TrackDetail;
