import React, { useState , useEffect } from 'react'
import List_55 from './components/List_55'
import Alert_55 from './components/Alert_55'

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     return JSON.parse(localStorage.getItem('list'));
//   } else {
//     return [];
//   }
// }

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem(list));
  } else {
    list = [];
  }
  return list
}

const setLocalStorage = (list) => {
  localStorage.setItem('list' , JSON.stringify(list))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')


const App_55 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(defaultList);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, seteditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  // useEffect( () => {
  //   localStorage.setItem('list', JSON.stringify(list));
  // }, [list]);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
      
    }else if (name && isEditing){
      const newItems = list.map((item)=>{
        if(item.id === editID) {
          return {...item,title : name}
        }
        return item;
      })
      setList(newItems);
      setLocalStorage(newItems);
      setName('');
      setIsEditing(false);
      showAlert(true, 'value changed', 'success')
    }
     else {
      showAlert(true, 'value added', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      const newItems = [...list , newItem]
      setList([newItems]);
      setLocalStorage(newItems)
      setName('');
    };

  };

  // const removeAlert = () => { }

  const removeItem = (id) => {
    const newItems = list.filter((item) => item.id != id);
    setList(newItems);
    setLocalStorage(newItems);
    showAlert(true,'item removed', 'danger')
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    seteditID(id);
    setName(specificItem.title);
  }

  // const removeItem = (id) => {
  //   showAlert(true, 'item removed', 'danger');
  //   setList( list.filter( (item) => item.id !== id ));
  // };

  const clearList = () => {
    showAlert(true, 'Empty List', 'danger');
    setList([])
    setLocalStorage([]);
  }

  return (
    <>
      <section className="section-center">
        <form className="grocery-from" onSubmit={handleSubmit}>
          {alert.show && <Alert_55 {...alert} removeAlert={showAlert} />}
          <h3>Grocery Bud -- 210410055</h3>
          <div className="form-control">
            <input type="text" className="grocery" placeholder="e.g.eggs" value={name} onChange={(e) => { setName(e.target.value) }} />
            <button type="submit" className="submit-btn" >submit</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List_55 items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>clear items</button>
          </div>
        )}
      </section>
    </>
  )
}

export default App_55