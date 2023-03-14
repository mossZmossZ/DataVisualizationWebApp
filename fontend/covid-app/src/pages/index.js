
import React from 'react';
  
const Home = () => {
  return (
    <div>
        <section class="hero is-large is-primary">
            <div class="hero-body">
                <div class="">
                    <p class="title">
                        Data Visualization
                    </p>
                    <p class="subtitle">
                        Covid-19
                    </p>
                </div>
            </div>
        </section>
        <div class="container">
            <section class="section">
                <h1 class="title">What is Data Visualization</h1>
                <h2 class="subtitle">
                    การนำ <strong>ข้อมูล หรือ Data</strong>  ที่ได้มาจากแหล่งข้อมูลต่างๆ มาวิเคราะห์ประมวลผลแล้วนำเสนอออกมาในรูปแบบที่มองเห็นและทำความเข้าใจได้ด้วยตาเช่น แผนภูมิ รูปภาพ แผนที่ กราฟแสดงเกรนด์ ตาราง วิดีโอ อินโฟกราฟิก (Infographic) แดชบอร์ด (dashboard)
                </h2>
            </section>
            <section class="section is-primary">
                <h1 class="title">What Information we visualize about ?</h1>
                <h2 class="subtitle">
                    สถานการณ์ผู้ติดเชื้อ COVID-19 อัพเดทรายสัปดาห์
                    ข้อมูลจาก : https://covid19.ddc.moph.go.th
                </h2>
            </section>
        </div>
    </div>
  );
};
  
export default Home;