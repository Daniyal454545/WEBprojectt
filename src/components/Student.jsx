import React from 'react';
// import { Carousel } from 'react-bootstrap';
import {Carousel} from '3d-react-carousal'
import aa1 from '../image/aa1.jpg';
import aa2 from '../image/aa2.jpg';
import aa3 from '../image/aa3.jpg';
import aa4 from '../image/aa4.jpg';

import './Earth.scss'

const Student = () => {
    let slides = [
   
        <img  className="im1" src={aa1}  alt="1" />,
      <img className="im1" src={aa2} alt="2" />  ,
      <img className="im1" src={aa3} alt="3" />  , 
      <img className="im1" src={aa4} alt="4" />  ,
     
      ];

    return (
        <>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header> 
        <br/>
        <br/>
        <br/>
        <Carousel slides={slides}/>
      </div>
        <h4>Наш состав 😍</h4>
      <div>
      </div>
      </>
    );
};

export default Student;