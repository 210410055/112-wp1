import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrapper/mid2_xx/Menu_xx';

let api_url = `http://localhost:5000/api/mid2_55/menu_55`


const MenuByCategoryNodePage_xx = () => {
  const [name, setName] = useState('蔡武勳');
  const [id, setId] = useState('210410055');
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');

  const fetchMenuDataFromNode = async () => {
    try {
      const response = await fetch(api_url + `/${category}`)
      const data = await response.json();
      console.log('menu data' , data);
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuDataFromNode();
  }, [category]);

  const changeMenuFilter = (category) => {
    setCategory(category);
  }

  return (
    <Wrapper>
          <section className="menu">
     
     <div className="title">
       <h2>Our Menu - Mid2 Node Server</h2>
       <h3>{name},{id} </h3>
       <div className="underline"></div>
     </div>
    
     <div className="btn-container">
       <button type="button" 
         className="filter-btn" 
         data-id="all" 
         onClick={() => changeMenuFilter('')}>all</button>
       
       <button type="button"
         className="filter-btn" 
         data-id="breakfast"
         onClick={() => changeMenuFilter('breakfast')} >
         breakfast</button>
       
       <button type="button"
         className="filter-btn"
         data-id="lunch"
         onClick={() => changeMenuFilter('lunch')}>lunch</button>
       
       <button type="button" 
         className="filter-btn" 
         data-id="shakes"
         onClick={() => changeMenuFilter('shakes')}>
         shakes</button >
        
      <button type="button"
          className="filter-btn" 
          data-id="dinner" 
          onClick={() => changeMenuFilter('dinner')}>
         dinner
       </button>
     </div>
   
     <div className="section-center">
      {data.map((item)=>{
        const {Id,title,category, price, img, descrip} = item;
        return (
          <article key={Id} className='menu-item'>
          <img
            src={img}
            alt="buttermilk"
            pancakes=""
            className="photo"
          />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
            </header>
            <p className="item-text">
              {descrip}
            </p>
          </div>
        </article>
        )
      })}
             {/* <article className="menu-item">
         <img
           src="/menu/images/item-1.jpeg"
           alt="buttermilk"
           pancakes=""
           className="photo"
         />
         <div className="item-info">
           <header>
             <h4>buttermilk pancakes</h4>
             <h4 className="price">$15.99</h4>
           </header>
           <p className="item-text">
             I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
             freegan copper mug whatever cold-pressed
           </p>
         </div>
       </article>
       <article className="menu-item">
         <img src="/menu/images/item-2.jpeg" alt="diner" double="" className="photo" />
         <div className="item-info">
           <header>
             <h4>diner double</h4>
             <h4 className="price">$13.99</h4>
           </header>
           <p className="item-text">
             vaporware iPhone mumblecore selvage raw denim slow-carb leggings
             gochujang helvetica man braid jianbing. Marfa thundercats
           </p>
         </div>
       </article>
       <article className="menu-item">
         <img
           src="/menu/images/item-3.jpeg"
           alt="godzilla"
           milkshake=""
           className="photo"
         />
         <div className="item-info">
           <header>
             <h4>godzilla milkshake</h4>
             <h4 className="price">$6.99</h4>
           </header>
           <p className="item-text">
             ombucha chillwave fanny pack 3 wolf moon street art photo booth
             before they sold out organic viral.
           </p>
         </div>
       </article>
       <article className="menu-item">
         <img
           src="/menu/images/item-4.jpeg"
           alt="country"
           delight=""
           className="photo"
         />
         <div className="item-info">
           <header>
             <h4>country delight</h4>
             <h4 className="price">$20.99</h4>
           </header>
           <p className="item-text">
             Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism
             austin mlkshk truffaut,
           </p>
         </div>
       </article>
       <article className="menu-item">
         <img src="/menu/images/item-5.jpeg" alt="egg" attack="" className="photo" />
         <div className="item-info">
           <header>
             <h4>egg attack</h4>
             <h4 className="price">$22.99</h4>
           </header>
           <p className="item-text">
             franzen vegan pabst bicycle rights kickstarter pinterest
             meditation farm-to-table 90's pop-up
           </p>
         </div>
       </article>
       <article className="menu-item">
         <img src="/menu/images/item-6.jpeg" alt="oreo" dream="" className="photo" />
         <div className="item-info">
           <header>
             <h4>oreo dream</h4>
             <h4 className="price">$18.99</h4>
           </header>
           <p className="item-text">
             Portland chicharrones ethical edison bulb, palo santo craft beer
             chia heirloom iPhone everyday
           </p>
         </div>
       </article> */}
     </div>
   </section>
    </Wrapper>
  );
};

export default MenuByCategoryNodePage_xx;
