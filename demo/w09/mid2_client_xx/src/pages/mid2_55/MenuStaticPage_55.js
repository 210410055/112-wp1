import { useState } from 'react';

import Wrapper from '../../assets/wrapper/mid2_xx/Menu_xx';

const MenuStaticPage_xx = () => {
  const [name, setName] = useState('蔡武勳');
  const [id, setId] = useState('210410055');
  return (
    <Wrapper>

    <section class="menu">
     
      <div class="title">
        <h2>Our Menu - Mid2 Static</h2>
        <h3>{name},{id} </h3>
        <div class="underline"></div>
      </div>
     
      <div class="btn-container">
        <button type="button" class="filter-btn" data-id="all">all</button>
        <button type="button" class="filter-btn" data-id="breakfast">
          breakfast</button>
        <button type="button" class="filter-btn" data-id="lunch">lunch</button>
        <button type="button" class="filter-btn" data-id="shakes">
          shakes</button >
          <button type="button" class="filter-btn" data-id="dinner">
          dinner
        </button>
      </div>
    
      <div class="section-center">
        <article class="menu-item">
          <img
            src="/menu/images/item-1.jpeg"
            alt="buttermilk"
            pancakes=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15.99</h4>
            </header>
            <p class="item-text">
              I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
              freegan copper mug whatever cold-pressed
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="/menu/images/item-2.jpeg" alt="diner" double="" class="photo" />
          <div class="item-info">
            <header>
              <h4>diner double</h4>
              <h4 class="price">$13.99</h4>
            </header>
            <p class="item-text">
              vaporware iPhone mumblecore selvage raw denim slow-carb leggings
              gochujang helvetica man braid jianbing. Marfa thundercats
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/menu/images/item-3.jpeg"
            alt="godzilla"
            milkshake=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>godzilla milkshake</h4>
              <h4 class="price">$6.99</h4>
            </header>
            <p class="item-text">
              ombucha chillwave fanny pack 3 wolf moon street art photo booth
              before they sold out organic viral.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/menu/images/item-4.jpeg"
            alt="country"
            delight=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>country delight</h4>
              <h4 class="price">$20.99</h4>
            </header>
            <p class="item-text">
              Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism
              austin mlkshk truffaut,
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="/menu/images/item-5.jpeg" alt="egg" attack="" class="photo" />
          <div class="item-info">
            <header>
              <h4>egg attack</h4>
              <h4 class="price">$22.99</h4>
            </header>
            <p class="item-text">
              franzen vegan pabst bicycle rights kickstarter pinterest
              meditation farm-to-table 90's pop-up
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="/menu/images/item-6.jpeg" alt="oreo" dream="" class="photo" />
          <div class="item-info">
            <header>
              <h4>oreo dream</h4>
              <h4 class="price">$18.99</h4>
            </header>
            <p class="item-text">
              Portland chicharrones ethical edison bulb, palo santo craft beer
              chia heirloom iPhone everyday
            </p>
          </div>
        </article>
      </div>
    </section>
    </Wrapper>
  );
};

export default MenuStaticPage_xx;
