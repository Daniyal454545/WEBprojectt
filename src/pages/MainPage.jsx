import React from 'react';
import Navbar from '../animations/BurgerMenu/Navbar';
import Mars from '../components/Mars';
import Form from '../pages/FormPage'
const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <Mars/>
            <Form/>
        </div>
    );
};

export default MainPage;