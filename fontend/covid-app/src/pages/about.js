import React from 'react';
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
  const people = [
    { name: 'เนติพัฒน์ สุกใส', email:'@kmutnb.ac.th' , image: person1 },
    { name: 'จิตฤดี ดวงดี', email:'s6301012620022@kmutnb.ac.th' ,image: person2 },
    { name: 'ฐานวัฒน์ ทองเปี้ย',  email:'@kmutnb.ac.th' , image: person3 },
    { name: 'ฐิตานันท์ มหาพรชัย', email:'@kmutnb.ac.th' ,image: person4 },
    { name: 'วรวิช เซ็นธุลี', email:'s6301012630168@kmutnb.ac.th' ,image: person5 },
    { name: 'ณัฐวีร์ นริศชาติ', email:'@kmutnb.ac.th' ,image: person6 },
    { name: 'สุรชัย สันติภาพ', email:'@kmutnb.ac.th' ,image: person7 },
    { name: 'แสง รงยง', email:'@kmutnb.ac.th' ,image: person8 },
    { name: 'นรินทร์ ศิริณภัค', email:'@kmutnb.ac.th' ,image: person9 },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">About Us</h1>
        <div className="columns is-multiline">
          {people.map((person, index) => (
            <div key={index} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by4">
                    <img src={person.image} alt={person.name,person.email} />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <p className="title is-5">{person.name}</p>
                  <a className="subtitle is-5">{person.email}</a>
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