import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./src/data.json");
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container shadow-sm">
      <div className="row">
        <div id="header" className="col-12 col-md-6 py-4 px-5 text-center">
          <h1 className="h5 text-center mb-4">Your Result</h1>
          <div className="score-circle mx-auto lh-1 d-flex flex-column justify-content-center align-items-center rounded-circle">
            <p className="score mb-1 mt-3">76</p>
            <p>of 100</p>
          </div>
          <h2 className="h3 mt-4 text-light">Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div id="body" className="col-12 col-md-6 px-4 py-4">
          <h3 className="h5">Summary</h3>
          {data.map((item) => (
            <div
              key={item.category}
              className={
                item.category +
                " d-flex justify-content-between p-3 rounded my-3"
              }
            >
              <div className="d-flex align-items-center">
                <img src={item.icon} alt="" className="pe-3" />
                <p className="mb-0">{item.category}</p>
              </div>
              <div>
                <span>{item.score}</span> / 100
              </div>
            </div>
          ))}

          <button className="d-block w-100 py-3 rounded-pill text-light border-0 mt-4">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
