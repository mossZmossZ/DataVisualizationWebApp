import React, { useState, useEffect } from 'react';

const InfoDetails = () => {
    /*
    const [data, setData] = useState([]);
  
    const fetchData = () => {
      fetch('chart.json')
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          const resultx = embed('#view', actualData);
          setData(actualData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    useEffect(() => {
      fetchData();
      //const result = embed('#view', data);
    }, []);
    */
    return (
        <div className="container box">
        <h1 className="title is-1">รายละเอียด</h1>
            <div className="tile is-ancestor">
                <div className="tile is-vertical">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-primary box">
                            <p className="title">คนติดเชื้อ</p>
                            <p className="subtitle">Top tile</p>
                            </article>
                            <article className="tile is-child notification is-warning box">
                            <p className="title">...tiless</p>
                            <p className="subtitle">Bottom tile</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info box">
                            <p className="title">Middle tile</p>
                            <p className="subtitle">With an image</p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger box">
                            <p className="title">Wide tile</p>
                            <p className="subtitle">Aligned with the right tile</p>
                            <div className="content">
                            
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  //<div id="view2">{JSON.stringify(data, null, 2)}</div>
  export default InfoDetails;