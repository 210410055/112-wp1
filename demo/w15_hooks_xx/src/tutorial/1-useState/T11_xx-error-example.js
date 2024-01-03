import React from 'react';

const T11_xx_ErrorExample = () => {
  let title = 'random text';

  const handleClick = () => {
    title = 'Hello World';
    console.log('title', title);
  }
  
  // fragment
  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default T11_xx_ErrorExample;
