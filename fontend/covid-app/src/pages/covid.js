import React, { useState, useEffect } from 'react';
import embed from 'vega-embed';
import axios from 'axios';
  
const Covid = () => {
  const [data, setData] = useState({});

  const x = {};

  useEffect(() => {
    (async () => {
      const response = await fetch("http://45.150.128.22/chart.json",{ mode: 'no-cors'}).then(console.log);
      //const parsed = await response.json();
      setData(response);
    }
    )
    ();
  }, []);

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
        <div id="view"></div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
  
export default Covid;