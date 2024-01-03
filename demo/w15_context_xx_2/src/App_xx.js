import React, { useState, useEffect, useContext } from 'react';
import data from './blogData_xx';
import BlogList_xx from './components/BlogList_xx';
import Alert_xx from './components/Alert_xx';
import { useBlogContext } from './BlogContext_xx';

const App_xx = () => {
  const {alert, clearBlogs} = useBlogContext();
  return ( 
      <section className='blogs'>
        {alert.show && <Alert_xx />}
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
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


export default App_xx;
