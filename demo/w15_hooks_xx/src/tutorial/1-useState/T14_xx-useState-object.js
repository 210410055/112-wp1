import React, { useState } from 'react';

const T14_xx_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'hsingtai',
    id: 123456789,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message: 'Welcome to Learn React'});
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.id}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage} >Change Message</button>
    </>
  );
};

export default T14_xx_UseStateObject;
