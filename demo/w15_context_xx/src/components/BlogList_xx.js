import React from 'react';
import Blog_xx from './Blog_xx';
import { useBlogContext } from '../App_xx';

const BlogList_xx = () => {
<<<<<<< HEAD
  const { blogs } = useBlogContext();
=======
  const {blogs} = useBlogContext();
>>>>>>> 69508b4b160c4f91db72f2abfc89314d4a48f28d
  return (
    <div className='blogs-center'>
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_xx
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_xx;
