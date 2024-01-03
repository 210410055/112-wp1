import React from 'react';
import Blog2_xx from './Blog2_xx';
import { useBlogContext } from '../BlogContext_xx';
// import { useBlogContext } from '../BlogContextLocalStorage_xx';

const BlogList2_xx = () => {
  const { blogs2 } = useBlogContext();
  return (
    <div className='blogs-center'>
      {blogs2.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog2_xx
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

export default BlogList2_xx;
