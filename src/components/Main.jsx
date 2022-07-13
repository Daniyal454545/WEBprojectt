import React from 'react';
import EarthPage from '../pages/StudentPage';
import MarsPage from '../pages/MarsPage'
import HomePage from '../pages/HomePages';
import College from './College';
// import Foooter from '../Footer/Foooter';
// import CartTable from './CartTable';
import FormPage from '../pages/FormPage'
import AboutUs from './AboutUs';
import FeedBackPage from '../pages/FeedBackPage';
import TodoList from './TodoList';



const Main = () => {
    
        return (
            <>

            <section id="home">
            <HomePage/>
            </section>
            <section id="mars">
            <MarsPage/>
            </section>
            <section id='about' >
                <AboutUs/>
            </section>
            <section id="earth">
             <EarthPage/>
            </section>
            <section id='college' >
                <College/>
            </section>
            <section id='form' >
                {/* <CartTable/> */}
                {/* <FormPage/> */}
            </section>
            <section>
                {/* <FeedBackPage/> */}
                {/* <TodoList/> */}
            </section>
            {/* <section>
                <Foooter/>
            </section> */}
            </>
        );
    
}

export default Main;