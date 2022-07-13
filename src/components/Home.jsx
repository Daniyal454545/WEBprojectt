import * as React from 'react';
import './Home.scss';
import home from '../img/home.png'
import logonav from '../img/logonav.png'
import { Link } from 'react-router-dom';
import arrow from '../img/arrow.svg'


const Home =() => {

  return (
    <>
    <div className="start">
      <img src={home} alt="" />
      <div className="Home_h">
      <h1 className="" >CCC</h1>

      {/* <b className='Home_p'>Совет студенческих самоуправлений</b> */}
      <Link>
      {/* <button onClick={() => window.open('/form')} className='Home_button' >Подать заявку ✍🏻</button> */}
      </Link>
      </div>

      <div className="Home_img">
        <img className='Home_img_logo' src={logonav} alt="" />
      </div>
      <Link to='/mars' >
      <img className='home_arrow' src={arrow} alt="" />
      </Link>
    </div>


</>
  );
}
export default Home;