import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [artists, setArtists] = useState([]);

  const getData = () => {
    Axios.get(`http://localhost:5000/artists`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.res.data.err);
      });
  };

  useEffect(() => {
    Axios.get(`http://localhost:5000/artists`).then((res) => {
      console.log(res.data);
      setArtists(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={getData}
        >
          Get
        </button>
        <h1>Artists</h1>
        <div className="artists">
          <div className="container">
            <div className="row">
              {artists.map((item, i) => {
                return (
                  <div key={i} className="col-sm-4">
                    <div className="border border-dark rounded-1">

                    <h3>{item.name}</h3>
                    <h5>Age: {item.age}</h5>
                    <p className="text-primary">Followers: {item.followers}</p>
                    <p>Awards: {item.awards}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
