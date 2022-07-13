import React, { useEffect } from 'react';
import '../components/Mars.scss'
import home from '../img/homeimg.png'
import Home_two from '../img/Home_two.svg'
// import arrow from '../img/arrow.svg'
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import users from '../img/icons/regular/users.svg'
// import briefcase from '../img/icons/regular/briefcase.svg'

const Mars = () => {
      // useEffect(()=> {
      //   Aos.init({})
      // }, [])


    return (
    <>
    <div id='mars' className="intro">
      <img src={home} alt="" />
      {/* <img className='Home_two_arrow' src={arrow} alt="" /> */}
      <h2>Что такое ССС 🤔?</h2>
      <div className="big_block">
        <div className="insides">
        <img className='Home_two' src={Home_two} alt="" />
        <p className='Home_two_p' >Это Совет Студенческих Самоуправлении-  особая форма инициативной, самостоятельной, ответственной самостоятельной деятельности студентов, направленной на решение важных вопросов жизнедеятельности студенческой молодежи, развитие ее социальной активности.</p>
        </div>
        <button className='Home_two_button_one' > <a href="https://kstu.kg/fileadmin/user_upload/polozhenie_o_studencheskom_samoupravlenii.pdf"> Положение ССС</a> </button>
        <button className='Home_two_button_two' > <a href="https://kstu.kg/fileadmin/user_upload/ustav_sss.pdf"> Устав ССС</a></button>
        <div className="mini_blocks">
        <div data-aos="fade-up"
     data-aos-duration="4000" className="block_1">
       <h5>Пример</h5>
       {/* <img className='i-img' src={users} alt="" /> */}
       <span className='span_m' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ex!</span>
       </div>
      <div data-aos="fade-up"
     data-aos-duration="4000" className="block_1">
       <h5>Пример</h5>
       {/* <img src={briefcase} alt="" /> */}
       <span  className='span_m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ex!</span>
       </div>
      <div data-aos="fade-up"
     data-aos-duration="4000" className="block_1">
      <h5>Пример</h5>
      <span  className='span_m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ex!</span>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="4000" className="block_1"><h5>Пример</h5>
     <span  className='span_m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ex!</span></div>
      <div data-aos="fade-up"
     data-aos-duration="4000" className="block_1"><h5>Пример</h5>
     <span  className='span_m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ex!</span></div>
      <div data-aos="fade-up"
     data-aos-duration="4000" className="block_1"><h5>Пример</h5>
     <span  className='span_m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ex!</span></div>

        </div>
      </div>
    </div>
    </>
    );
};

export default Mars;
