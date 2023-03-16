import React, { useState, useEffect } from 'react';
import embed from 'vega-embed';

const InfoDetails = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('chart.json')
        .then((response) => response.json())
        .then((actualData) => {
            console.log(actualData);
            const result_graph = embed('#view', actualData);
            setData(actualData);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container box">
        <h1 className="title is-1">กราฟ</h1>
        <div className="container">
          <div id="view"></div>
          <div>
          </div>
        </div>
      </div>
    );
  };
  
  //<div id="view2">{JSON.stringify(data, null, 2)}</div>
  export default InfoDetails;