import React, { useState, useEffect, useContext } from 'react';
import BlogList2_xx from '../../components/BlogList2_xx';
import Alert_xx from '../../components/Alert_xx';
import { useBlogContext } from '../../BlogContext_xx';

const BlogContext2_xx = () => {
  const { alert, clearBlogs2, filterItems2 } = useBlogContext();

  return (
    <section className='blogs'>
      {alert.show && <Alert_xx />}
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
        <h2>Hsingtai Chung, 123456789</h2>
      </div>
      <div className='filter-container'>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems2('all')}
        >
          all
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems2('lifestyle')}
        >
          lifestyle
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems2('travel')}
        >
          travel
        </button>
      </div>
      <div className='blogs-center'>
        <BlogList2_xx />
      </div>
      <button className='clear-btn' onClick={clearBlogs2}>
        clear all blogs
      </button>
    </section>
  );
};
export default BlogContext2_xx;
