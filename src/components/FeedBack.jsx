import React, { useState } from 'react';
import '../components/FeedBack.scss'

const FeedBack = () => {
    const [Feed, setFeed] = useState('')
    return (
        <>
        <section className='Feed_page' >
        <form action="">
            <h6>Оставьте отзыв👽</h6>
            <div className="Feed_form">
                <input  className='Feed_input' type="text" />
                <button className='Feed_button' >Оставить</button>
            </div>
        </form>
        </section>
        </>
    );
};

export default FeedBack;