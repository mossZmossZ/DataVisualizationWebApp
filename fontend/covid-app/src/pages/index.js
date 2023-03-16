
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <section className="hero is-large is-primary">
            <div className="hero-body">
                <div className="">
                    <p className="title" style={{ fontSize: 72 }}>
                        Data Visualization
                    </p>
                    <p className="subtitle" style={{ fontSize: 40 }}>
                        Covid-19
                    </p>
                    <Link to="/covid19">
                    <button className="button is-primary is-rounded is-medium is-light">Try Now</button>
                    </Link>
                </div>
            </div>
        </section>
        <div className="container">
        <section className="section">
            <div className="columns">
            <div className="column is-2" >
                <figure className="image is-square">
                <img src="https://versions.bulma.io/0.7.0/images/placeholders/480x480.png" />
                </figure>
            </div>
            <div className="column">
                <h1 className="title">What is Data Visualization</h1>
                <h2 className="subtitle">
                การนำ <strong>ข้อมูล หรือ Data</strong> ที่ได้มาจากแหล่งข้อมูลต่างๆ มาวิเคราะห์ประมวลผลแล้วนำเสนอออกมาในรูปแบบที่มองเห็นและทำความเข้าใจได้ด้วยตาเช่น แผนภูมิ รูปภาพ แผนที่ กราฟแสดงเกรนด์ ตาราง วิดีโอ อินโฟกราฟิก (Infographic) แดชบอร์ด (dashboard)
                </h2>
            </div>
            </div>
        </section>
        <section className="section is-primary">
            <div className="columns">
            <div className="column is-2">
                <figure className="image is-square">
                <img src="https://versions.bulma.io/0.7.0/images/placeholders/480x480.png" />
                </figure>
            </div>
            <div className="column">
                <h1 className="title">What Information we visualize about ?</h1>
                <h2 className="subtitle">
                สถานการณ์ผู้ติดเชื้อ COVID-19 อัพเดทรายสัปดาห์ ข้อมูลจาก : https://covid19.ddc.moph.go.th
                </h2>
            </div>
            </div>
        </section>
        </div>
    </div>
  );
};
  
export default Home;