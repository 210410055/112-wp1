import React, { useState, useEffect, useContext } from 'react';
import BlogList_xx from '../../components/BlogList_xx';
import Alert_xx from '../../components/Alert_xx';
import { useBlogContext } from '../../BlogContext_xx';

const BlogContext1_xx = () => {
  const { alert, clearBlogs, filterItems } = useBlogContext();

  return (
    <section className='blogs'>
      {alert.show && <Alert_xx />}
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
        <h3>Hsingtai Chung, 123456789</h3>
      </div>
      <div className='filter-container'>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('all')}
        >
          all
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('lifestyle')}
        >
          lifestyle
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('travel')}
        >
          travel
        </button>
      </div>
      <div className='blogs-center'>
        <BlogList_xx />
      </div>
      <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
  );
};
export default BlogContext1_xx;
