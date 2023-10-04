import menu_data from './data'

import {useState} from 'react';
import Menu_xx from './components/Menu_55';
import Catetgory_xx from './components/Category_55';

const allcategory = ['all', 'breakfast', 'lunch','dessert','shakes', ];

const App = () => {
  const [menu,setMenu] = useState(menu_data);
  const [category, setCategory] = useState(allcategory)
  // console.log('menu ', menu);

  return (
    <section className="menu">
        {/* title */}
    <div className="title">
      <h2>our menu - 210410055</h2>
      <div className="underline"></div>
    </div>
      {/* filter buttons */}
  <Catetgory_xx category={category}/>
      {/* menu items */}
   <Menu_xx menu = {menu}/>
  </section>
  );
}

export default App;
