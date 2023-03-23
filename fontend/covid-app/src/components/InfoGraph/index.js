import React, { useState, useEffect } from 'react';
import embed from 'vega-embed';
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";

    const InfoDetails = () => {
        
        const [data, setData] = useState([]);
        const [dataLine, setdataLine] = useState([]);
        const [dataCountry, setdataCountry] = useState([]);

        const [loadingInProgress, setLoading] = useState(false);

        const [years, setYears] = useState({
            "2023": false,
            "2022": false,
            "2021": false,
        });
        const [areas, setAreas] = useState({
            "North": false,
            "Central": false,
            "South": false,
            "East": false,
            "West": false,
            "East_west": false,
        });

        const toggleYear = (year) => {
        setYears((prevState) => ({
            ...prevState,
            [year]: !prevState[year],
        }));
        };

        const selectAllYears = () => {
        setYears((prevState) => ({
            ...prevState,
            "2023": true,
            "2022": true,
            "2021": true,
        }));
        };

        const deselectAllYears = () => {
        setYears((prevState) => ({
            ...prevState,
            "2023": false,
            "2022": false,
            "2021": false,
        }));
        };

            
        const toggleArea = (area) => {
            setAreas((prevState) => ({
            ...prevState,
            [area]: !prevState[area],
            }));
        };

        const selectAllAreas = () => {
            setAreas((prevState) => ({
            ...prevState,
            "North": true,
            "Central": true,
            "South": true,
            "East": true,
            "West": true,
            "East_west": true,
            }));
        };

        const deselectAllAreas = () => {
            setAreas((prevState) => ({
            ...prevState,
            "North": false,
            "Central": false,
            "South": false,
            "East": false,
            "West": false,
            "East_west": false,
            }));
        };
        
        // const fetchData_Bar = () => {
        // fetch("BarChart.json")
        //     .then((response) => response.json())
        //     .then((actualData) => {
        //     console.log(actualData);
        //     const result_graph = embed("#viewbar", actualData);
        //     setData(actualData);
        //     })
        //     .catch((err) => {
        //     console.log(err.message);
        //     });
        // };
        // const fetchData_Line = () => {
        // fetch("LineChart.json")
        //     .then((response) => response.json())
        //     .then((actualData) => {
        //     console.log(actualData);
        //     const result_graph = embed("#viewline", actualData);
        //     setData(actualData);
        //     })
        //     .catch((err) => {
        //     console.log(err.message);
        //     });
        // };
        // const fetchData_Country = () => {
        // fetch("ThailandTopoChart.json")
        //     .then((response) => response.json())
        //     .then((actualData) => {
        //     console.log(actualData);
        //     const result_graph = embed("#viewcountry", actualData);
        //     setData(actualData);
        //     })
        //     .catch((err) => {
        //     console.log(err.message);
        //     });
        // };
        let bardata = {};
        const fetchData_Bar = async () => {
            try {
              const response = await axios.post('https://netipat.dev:8000/bar_graphresult', {
                year: select_year, //[2023,2014]
                area: select_area, //[1,2,3]
                // Add other data you want to send as needed
              });
              console.log('Response:', response.data);
              //bardata = response.data;
              const result_graph = embed("#viewbar", response.data);
            } catch (error) {
              console.error('Error:', error);
            }
        };
        const fetchData_Line = async () => {
            try {
              const response = await axios.post('https://netipat.dev:8000/line_graphresult', {
                year: select_year, //[2023,2014]
                area: select_area, //[1,2,3]
                // Add other data you want to send as needed
              });
              console.log('Response:', response.data);
              const result_graph = embed("#viewline", response.data);
            } catch (error) {
              console.error('Error:', error);
            }
        };
        const fetchData_Country = async () => {
            try {
              const response = await axios.post('https://netipat.dev:8000/country_graphresult', {
                year: select_year,
                area: select_area,
                // Add other data you want to send as needed
              });
              console.log('Response:', response.data);
              const result_graph = embed("#viewcountry", response.data);
            } catch (error) {
              console.error('Error:', error);
            }
        };

        const select_year = [];
        const select_area = [];
        const submitData = async () => {
            for (let i = 0; i < Object.keys(years).length; i++) {
                if(years[Object.keys(years)[i]] == true)
                {
                    console.log(Object.keys(years)[i])
                    select_year.push(Number(Object.keys(years)[i]));
                }
                //select_year.push(Number(Object.keys(years)[i]));
                //console.log(years[Object.keys(years)[i]]);
            }
            //console.log(Object.keys(areas));
            for (let i = 0; i < Object.keys(areas).length; i++) {
                if(areas[Object.keys(areas)[i]] == true)
                {
                    console.log(i+1)
                    select_area.push(Number(i+1));
                }
            }
            console.log(select_year);
            console.log(select_area);
          };

        useEffect(() => {
            submitData();
            //loadingInProgress(false);
            fetchData_Bar(); //fetch data from chart.json
            fetchData_Line(); //fetch data from chart.json
            fetchData_Country(); //fetch data from chart.json

            // Check if all years are selected
            const allYearsSelected = Object.values(years).every((year) => year === true);
            // Update the "Include All" checkbox
            document.getElementById("includeAllYears").checked = allYearsSelected;

            // Check if all areas are selected
            const allAreasSelected = Object.values(areas).every((area) => area === true);
            // Update the "Include All" checkbox for areas
            document.getElementById("includeAllAreas").checked = allAreasSelected;
            // Update the "Include All" checkbox for areas
        }, [years,areas]);

        const test = () => {
            setLoading(true);
        };

        const test2 = () => {
            setLoading(false);
        };

        const test3 = () => {
            console.log(bardata);
            const result_graph = embed("#viewbar", bardata);
        };

            //<button onClick={test}>test</button>
            //<button onClick={test2}>test2</button>
            //<button onClick={test3}>test3</button>
    return (
        <div className="section">
            <h1 className="title is-1"><i class="fa-solid fa-chart-column"></i> กราฟแสดงข้อมูล</h1>
            <div class="panel container">
                <p class="panel-heading has-background-grey-lighter">
                <i class="fa-solid fa-calendar-days"></i> Year :
                </p>
                <div class="panel-block">
                    <div className="field is-grouped is-grouped-multiline is-box">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                id="includeAllYears"
                                className='is-checkradio is-white'
                                type="checkbox"
                                onChange={(event) =>
                                    event.target.checked ? selectAllYears() : deselectAllYears()
                                }
                                />
                                <span>ทั้งหมด</span>
                            </label>
                        </div>
                        <div className="control">
                            <label className="checkbox">
                                <input
                                type="checkbox"
                                checked={years["2023"]}
                                onChange={() => toggleYear("2023")}
                                />
                                <span>2023</span>
                            </label>
                        </div>
                        <div className="control">
                            <label className="checkbox">
                                <input
                                type="checkbox"
                                checked={years["2022"]}
                                onChange={() => toggleYear("2022")}
                                />
                                <span>2022</span>
                            </label>
                        </div>
                        <div className="control">
                            <label className="checkbox">
                                <input
                                type="checkbox"
                                checked={years["2021"]}
                                onChange={() => toggleYear("2021")}
                                />
                                <span>2021</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel container">
                <p class="panel-heading has-background-grey-lighter">
                <i class="fa-solid fa-mountain-sun"></i> Area :
                </p>
                <div class="panel-block">
                <div className="field is-grouped is-grouped-multiline">
                    <div className="control">
                        <label className="checkbox">
                            <input
                            id="includeAllAreas"
                            type="checkbox"
                            onChange={(event) =>
                                event.target.checked ? selectAllAreas() : deselectAllAreas()
                            }
                            />
                            ทั้งหมด
                        </label>
                    </div>
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={areas["North"]}
                                onChange={() => toggleArea("North")}
                            />
                            ภาคเหนือ
                        </label>
                    </div>
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={areas["Central"]}
                                onChange={() => toggleArea("Central")}
                            />
                            ภาคกลาง
                        </label>
                    </div>
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={areas["South"]}
                                onChange={() => toggleArea("South")}
                            />
                            ภาคใต้
                        </label>
                    </div>
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={areas["East"]}
                                onChange={() => toggleArea("East")}
                            />
                            ภาคตะวันออก
                        </label>
                    </div>
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={areas["West"]}
                                onChange={() => toggleArea("West")}
                            />
                            ภาคตะวันตก
                        </label>
                    </div>
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={areas["East_west"]}
                                onChange={() => toggleArea("East_west")}
                            />
                            ภาคตะวันออกเฉียงเหนือ
                        </label>
                    </div>
                </div>
                    
                </div>
            </div>

            <div className="container">
                {loadingInProgress ? (
                    <div className="loader-container">
                        <MoonLoader color="#36d7b7" />
                    </div>
                    ) : (
                        <div>
                    <div class="columns">
                        <div class="column">
                            <div id="viewbar"></div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-half">
                            <div class="level">
                                <p class="level-item has-text-centered">
                                    <div id="viewline"></div>
                                </p>
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="level">
                                <p class="level-item has-text-centered">
                                    <div id="viewcountry"></div>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
);};
    
  //<div id="view2">{JSON.stringify(data, null, 2)}</div>
  export default InfoDetails;