import React from 'react';
import './Foooter.scss'

const Foooter = () => {
    return (
        <>
         <footer class="footer">
      <div class="container">
        <div class="grid-4">
          

          <div class="grid-4-col footer-links">
            <a href='#home' class="title-sm">CCC</a>
            <ul>
              <li>
                <a href="#mars">Информация</a>
              </li>

              <li>
                <a href="#earth">Студенты</a>
              </li>
              <li>
                <a href="#contact">Магазин</a>
              </li>
            </ul>
          </div>


          {/* <div class="grid-4-col footer-newstletter">
            <h3 class="title-sm">Subscribe</h3>

            <div class="footer-input-wrap">
              <input type="email" color='red' class="footer-input" placeholder="Email" />
              <a href="#" class="input-arrow">
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </div> */}
        </div>



          <div class="followme-wrap">
            {/* <div class="followme">
              <h3>Follow me</h3>
              <span class="footer-line"></span>
              <div class="social-media">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div> */}

            <div class="back-btn-wrap">
              <a href="#" class="back-btn">
                <i class="fas fa-chevron-up"></i>
              </a>
            </div>
          </div>
        </div>
    </footer>

        </>
        
    );
};

export default Foooter;