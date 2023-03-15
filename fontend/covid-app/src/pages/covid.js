import React, { useState, useEffect } from 'react';
import embed from 'vega-embed';
import axios from 'axios';
  
const Covid = () => {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('chart.json')
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    const result = embed('#view', data);
  }, []);
  
  /*
  const url = './chart.json'
  const data = {
  };
  console.log("Original Data:",data);
  axios.get(url, data, {
    headers: {
      Accept: "application/json",
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({data}) => {
    console.log("Recive Data:",data);
  });
  console.log("Recive Data2:",data);
  */

  console.log("Recive Data2:",data);

  return (
    <div>
      <div class="container box">
        <h1 class="title is-1">รายละเอียด</h1>
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary box">
                  <p class="title">Vertical...</p>
                  <p class="subtitle">Top tile</p>
                </article>
                <article class="tile is-child notification is-warning box">
                  <p class="title">...tiles</p>
                  <p class="subtitle">Bottom tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info box">
                  <p class="title">Middle tile</p>
                  <p class="subtitle">With an image</p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger box">
                <p class="title">Wide tile</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                  
                </div>
              </article>
            </div>
          </div>
        </div>

      </div>
      <div class="container box">
        <h1 class="title is-1">กราฟ</h1>
        <div class="container box">
        <div id="view">s</div>
        
        </div>
      </div>
    </div>
  );
};

//<div id="view2">{JSON.stringify(data, null, 2)}</div>
export default Covid;