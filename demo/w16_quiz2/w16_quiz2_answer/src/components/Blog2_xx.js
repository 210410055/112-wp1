import React from 'react';
import { useBlogContext } from '../BlogContext_xx';
// import { useBlogContext } from '../BlogContextLocalStorage_xx';

const Blog2_xx = ({ id, img, title, desc, category }) => {
  const { removeItem2 } = useBlogContext();
  return (
    <article className='blog'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className='item-control'>
          <a href='#'>read more</a>
          <div className='btn-container'>
            <button
              type='button'
              className='delete-btn'
              onClick={() => removeItem2(id)}
            >
              {' '}
              delete{' '}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog2_xx;
