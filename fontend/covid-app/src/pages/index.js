import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.css';
import datahome from '../images/datahome.png';
import virushome from '../images/virushome.png';
import axios from 'axios';

import hero_bg from '../images/coverbg.jpg';
const Home = () => {
  return (
    <div>
        <section className="hero is-medium" style={{ backgroundImage: `url(${hero_bg})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            <div className="hero-body" style={{ backgroundColor: 'rgba(53,68,93,0.5)' }}>
                <div className="">
                    <p className="title" style={{ fontSize: 72 , color: "White"}}>
                        Data
                    </p>
                    <p className="title" style={{ fontSize: 72 , color: "White"}}>
                        Visualization
                    </p>
                    <Link to="/covid">
                    <button className="button is-primary is-rounded is-medium" style={{backgroundColor: '#9fcab7'}}>Try Now</button>
                    </Link>
                </div>
            </div>
            
        </section>
        <div className="container">
        <section className="section">
            <div className="columns">
            <div className="column">
                <div className="is-flex is-flex-direction-column">
                <figure className="image is-128xs128">
                <img src={datahome} style={{width: '40%', margin: '0 auto', display: 'block'}} />
                </figure>
                <div>
                    <h1 className="title text-center">What is Data Visualization</h1>
                    <h2 className="subtitle">
                    การนำ <strong>ข้อมูล หรือ Data</strong> ที่ได้มาจากแหล่งข้อมูลต่างๆ มาวิเคราะห์ประมวลผลแล้วนำเสนอออกมาในรูปแบบที่มองเห็นและทำความเข้าใจได้ด้วยตาเช่น แผนภูมิ รูปภาพ แผนที่ กราฟแสดงเกรนด์ ตาราง วิดีโอ อินโฟกราฟิก (Infographic) แดชบอร์ด (dashboard)
                    </h2>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="section is-primary">
            <div className="columns">
            <div className="column">
                <div className="is-flex is-flex-direction-column">
                <figure className="image is-256x256">
                    <img src={virushome} style={{width: '40%', margin: '0 auto', display: 'block'}} />
                </figure>
                <div>
                    <h1 className="title text-center">What Information we visualize about ?</h1>
                    <h2 className="subtitle">
                    สถานการณ์ผู้ติดเชื้อ COVID-19 อัพเดทรายสัปดาห์ ข้อมูลจาก : https://covid19.ddc.moph.go.th
                    </h2>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    </div>
  );
};
  
export default Home;