import React from 'react';
import { useState} from 'react';
import './about.css';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';
import person4 from '../images/person4.jpg';
import person5 from '../images/person5.jpg';
import person6 from '../images/person6.jpg';
import person7 from '../images/person7.jpg';
import person8 from '../images/person8.jpg';
import person9 from '../images/person9.jpg';

const About = () => {
  const people = [ // สร้าง array ของ object ที่มี key ชื่อ name, engname, email, image
    { name: 'เนติพัฒน์ สุกใส' , engname:'Netipat Suksai' , email:'s6301012610019@kmutnb.ac.th' , image: person1},
    { name: 'จิตฤดี ดวงดี' , engname:'Jitrudee Dongdee' , email:'s6301012620022@kmutnb.ac.th' ,image: person2 },
    { name: 'ฐานวัฒน์ ทองเปี้ย' , engname:'Thanawat Thongpia' ,  email:'s6301012620111@kmutnb.ac.th' , image: person3 },
    { name: 'ฐิตานันท์ มหาพรชัย' , engname:'Thitanun Mahapornchai' , email:'s6301012630036@kmutnb.ac.th' ,image: person4 },
    { name: 'วรวิช เซ็นธุลี' , engname:'Vorawit Chenthulee' , email:'s6301012630168@kmutnb.ac.th' , image: person5 },
    { name: 'ณัฐวีร์ นริศชาติ' , engname:'Nattavee Narischat' , email:'s6401012620021@kmutnb.ac.th' ,image: person6 },
    { name: 'สุรชัย สันติภาพ' , engname:'Surachai Santiphap' , email:'s6401012620145@kmutnb.ac.th' ,image: person7 },
    { name: 'แสง รงยง' , engname:'Sang Rongyong' , email:'s6401012620242@kmutnb.ac.th' ,image: person8 },
    { name: 'นรินทร์ ศิริณภัค' , engname:'Narin Sirinapuk' , email:'s6401012630086@kmutnb.ac.th' ,image: person9 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPeople = people.filter((person) => {
    const fullName = person.name.toLowerCase();
    const email = person.email.toLowerCase();
    const englishname = person.engname.toLowerCase();
    const searchQuery = searchTerm.toLowerCase();
  
    return fullName.includes(searchQuery) || email.includes(searchQuery) || englishname.includes(searchQuery);
  });

  return (
    <section className="section is-background">
      <div className="container">
        <h1 className="title has-text-centered is-libre-baskerville is-green-color" style={{fontSize:120}}>About Us</h1>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="field has-addons has-addons-centered">
              <div className="control">
                <input
                  className="input is-large is-rounded is-green-color"
                  type="text"
                  placeholder="Member"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {filteredPeople.map((person, index) => (
            <div key={index} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by4">
                    <img src={person.image} alt={person.name} />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <p className="title is-5">{person.name}</p>
                  <a className="subtitle is-6">{person.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;