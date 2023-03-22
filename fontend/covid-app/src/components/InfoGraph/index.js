import React, { useState, useEffect } from 'react';
import embed from 'vega-embed';


    const InfoDetails = () => {
        const [data, setData] = useState([]);
        const [dataLine, setdataLine] = useState([]);
        const [dataCountry, setdataCountry] = useState([]);

        const [years, setYears] = useState({
        "2023": false,
        "2022": false,
        "2021": false,
        });
        const [areas, setAreas] = useState({
            north: false,
            central: false,
            south: false,
            east: false,
            west: false,
            "east-west": false,
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
            "East-west": true,
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
            "East-west": false,
            }));
        };
        
        const fetchData_Bar = () => {
        fetch("chart.json")
            .then((response) => response.json())
            .then((actualData) => {
            console.log(actualData);
            const result_graph = embed("#viewbar", actualData);
            setData(actualData);
            })
            .catch((err) => {
            console.log(err.message);
            });
        };
        const fetchData_Line = () => {
        fetch("LineChart.json")
            .then((response) => response.json())
            .then((actualData) => {
            console.log(actualData);
            //const result_graph = embed("#viewline", actualData);
            setData(actualData);
            })
            .catch((err) => {
            console.log(err.message);
            });
        };
        const fetchData_Country = () => {
        fetch("ThailandTopoChart.json")
            .then((response) => response.json())
            .then((actualData) => {
            console.log(actualData);
            //const result_graph = embed("#viewcountry", actualData);
            setData(actualData);
            })
            .catch((err) => {
            console.log(err.message);
            });
        };

        useEffect(() => {
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
        }, [years], [areas]);


    return (
        <div className="section">
            <h1 className="title is-1">กราฟแสดงข้อมูล</h1>
            <div class="panel container">
                <p class="panel-heading">
                    Year :
                </p>
                <div class="panel-block">
                    <div className="field is-grouped is-grouped-multiline">
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
                <p class="panel-heading">
                Area :
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
                                checked={areas["East-west"]}
                                onChange={() => toggleArea("East-west")}
                            />
                            ภาคตะวันออกเฉียงเหนือ
                        </label>
                    </div>
                </div>
                    
                </div>
            </div>
            <div className="container">
                <div id="viewbar"></div>
            </div>
            <div className="container">
                <div id="viewline"></div>
                <div id="viewcountry"></div>
            </div>
        </div>
);};
    
  //<div id="view2">{JSON.stringify(data, null, 2)}</div>
  export default InfoDetails;