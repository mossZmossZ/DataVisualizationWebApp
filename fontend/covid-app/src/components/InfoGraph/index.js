import React, { useState, useEffect } from 'react';
import embed from 'vega-embed';
import graph from '../../images/graph.png';


    const InfoDetails = () => {
        const [data, setData] = useState([]);
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
    
    const fetchData = () => {
    fetch("chart.json")
        .then((response) => response.json())
        .then((actualData) => {
        console.log(actualData);
        const result_graph = embed("#view", actualData);
        setData(actualData);
        })
        .catch((err) => {
        console.log(err.message);
        });
    };

    useEffect(() => {
        fetchData(); //fetch data from chart.json
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
    <div>
        <div className="container box">
            <h1 className="title is-1">กราฟ</h1>
            <nav className="navbar is-spaced">
            <div className="navbar-brand">
                <h2 className="navbar-item">Year:</h2>
                <div className="navbar-item">
                    <label className="checkbox">
                        <input
                        id="includeAllYears"
                        type="checkbox"
                        onChange={(event) =>
                            event.target.checked ? selectAllYears() : deselectAllYears()
                        }
                        />
                        ทั้งหมด
                    </label>
                </div>
                <div className="navbar-item">
                <label className="checkbox">
                    <input
                    type="checkbox"
                    checked={years["2023"]}
                    onChange={() => toggleYear("2023")}
                    />
                    2023
                </label>
                </div>
                <div className="navbar-item">
                <label className="checkbox">
                    <input
                    type="checkbox"
                    checked={years["2022"]}
                    onChange={() => toggleYear("2022")}
                    />
                    2022
                </label>
                </div>
                <div className="navbar-item">
                <label className="checkbox">
                    <input
                    type="checkbox"
                    checked={years["2021"]}
                    onChange={() => toggleYear("2021")}
                    />
                    2021
                </label>
                </div>
                    <h2 className="navbar-item">Area:</h2>
                    <div className="navbar-item">
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
                    <div className="navbar-item">
                        <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={areas["North"]}
                            onChange={() => toggleArea("North")}
                            />
                            ภาคเหนือ
                        </label>
                    </div>
                    <div className="navbar-item">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={areas["Central"]}
                            onChange={() => toggleArea("Central")}
                            />
                            ภาคกลาง
                        </label>
                    </div>
                    <div className="navbar-item">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={areas["South"]}
                            onChange={() => toggleArea("South")}
                            />
                            ภาคใต้
                        </label>
                    </div>
                    <div className="navbar-item">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={areas["East"]}
                            onChange={() => toggleArea("East")}
                            />
                            ภาคตะวันออก
                        </label>
                    </div>
                    <div className="navbar-item">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={areas["West"]}
                            onChange={() => toggleArea("West")}
                            />
                            ภาคตะวันตก
                        </label>
                    </div>
                    <div className="navbar-item">
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
                </nav>
                <div className="container">
                <div id="view"></div>
                </div>
            </div>
            </div>
        );
        };
    
  //<div id="view2">{JSON.stringify(data, null, 2)}</div>
  export default InfoDetails;