import React, { useState, useEffect, useContext } from 'react';

import data from './blogData_xx';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem(list));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
};

setLocalStorage(data);

const data2 = JSON.parse(localStorage.getItem('list') || '[]');

const BlogContext = React.createContext();

const BlogContentProvider_xx = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  const [blogs2, setBlogs2] = useState(data2);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);
  console.log('blogs2', blogs2);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const removeItem2 = (id) => {
    showAlert(true, 'blog removed', 'danger');
    const newBlogs = blogs2.filter((blog) => blog.id !== id);
    setLocalStorage(newBlogs);
    setBlogs2(newBlogs);
  };

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  const clearBlogs2 = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs2([]);
    setLocalStorage([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };

  const filterItems2 = (category) => {
    if (category === 'all') {
      setBlogs2(data);
      setLocalStorage(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs2(newBlogs);
      setLocalStorage(newBlogs);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blogs2,
        alert,
        showAlert,
        removeItem,
        removeItem2,
        clearBlogs,
        clearBlogs2,
        filterItems,
        filterItems2,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
const useBlogContext = () => {
  return useContext(BlogContext);
};
export { BlogContentProvider_xx, useBlogContext };
