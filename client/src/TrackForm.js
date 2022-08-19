import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from './Api';

function TrackForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    Artist: '',
    Artist_ID: '',
    Artist_URL: '',
    Album: '',
    Album_ID: '',
    Album_URL: '',
    Album_Image: '',
    Album_Date: '',
    Track: '',
    Track_ID: '',
    Track_URL: '',
    Duration: '',
    Track_Popularity: '',
    Tempo: '',
    Key: '',
    Energy: '',
    Acousticness: '',
    Danceability: '',
    Liveness: '',
    Loudness: '',
    Speechiness: '',
  });

  useEffect(() => {
    if (id) {
      Api.playlists.get(id).then((response) => setData(response.data));
    }
  }, [id]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      let response;
      if (id) {
        response = await Api.playlists.update(id, data);
      } else {
        response = await Api.playlists.create(data);
      }
      navigate(`/tracks/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <h1>Track</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="Artist">
                Artist
              </label>
              <input type="text" className="form-control" id="Artist" name="Artist" onChange={onChange} value={data.Artist} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Artist_ID">
                Artist_ID
              </label>
              <input type="text" className="form-control" id="Artist_ID" name="Artist_ID" onChange={onChange} value={data.Artist_ID} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Artist_URL">
                Artist_URL
              </label>
              <input type="text" className="form-control" id="Artist_URL" name="Artist_URL" onChange={onChange} value={data.Artist_URL} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Album">
                Album
              </label>
              <input type="text" className="form-control" id="Album" name="Album" onChange={onChange} value={data.Album} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Album_ID">
                Album_ID
              </label>
              <input type="text" className="form-control" id="Album_ID" name="Album_ID" onChange={onChange} value={data.Album_ID} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Album_URL">
                Album_URL
              </label>
              <input type="text" className="form-control" id="Album_URL" name="Album_URL" onChange={onChange} value={data.Album_URL} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Album_Image">
                Album_Image
              </label>
              <input
                type="text"
                className="form-control"
                id="Album_Image"
                name="Album_Image"
                onChange={onChange}
                value={data.Album_Image}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Album_Date">
                Album_Date
              </label>
              <input type="text" className="form-control" id="Album_Date" name="Album_Date" onChange={onChange} value={data.Album_Date} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Track">
                Track
              </label>
              <input type="text" className="form-control" id="Track" name="Track" onChange={onChange} value={data.Track} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Track_ID">
                Track_ID
              </label>
              <input type="text" className="form-control" id="Track_ID" name="Track_ID" onChange={onChange} value={data.Track_ID} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Track_URL">
                Track_URL
              </label>
              <input type="text" className="form-control" id="Track_URL" name="Track_URL" onChange={onChange} value={data.Track_URL} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Duration">
                Duration
              </label>
              <input type="text" className="form-control" id="Duration" name="Duration" onChange={onChange} value={data.Duration} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Track_Popularity">
                Track_Popularity
              </label>
              <input
                type="text"
                className="form-control"
                id="Track_Popularity"
                name="Track_Popularity"
                onChange={onChange}
                value={data.Track_Popularity}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Tempo">
                Tempo
              </label>
              <input type="text" className="form-control" id="Tempo" name="Tempo" onChange={onChange} value={data.Tempo} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Key">
                Key
              </label>
              <input type="text" className="form-control" id="Key" name="Key" onChange={onChange} value={data.Key} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Energy">
                Energy
              </label>
              <input type="text" className="form-control" id="Energy" name="Energy" onChange={onChange} value={data.Energy} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Acousticness">
                Acousticness
              </label>
              <input
                type="text"
                className="form-control"
                id="Acousticness"
                name="Acousticness"
                onChange={onChange}
                value={data.Acousticness}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Danceability">
                Danceability
              </label>
              <input
                type="text"
                className="form-control"
                id="Danceability"
                name="Danceability"
                onChange={onChange}
                value={data.Danceability}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Liveness">
                Liveness
              </label>
              <input type="text" className="form-control" id="Liveness" name="Liveness" onChange={onChange} value={data.Liveness} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Loudness">
                Loudness
              </label>
              <input type="text" className="form-control" id="Loudness" name="Loudness" onChange={onChange} value={data.Loudness} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Speechiness">
                Speechiness
              </label>
              <input
                type="text"
                className="form-control"
                id="Speechiness"
                name="Speechiness"
                onChange={onChange}
                value={data.Speechiness}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default TrackForm;
