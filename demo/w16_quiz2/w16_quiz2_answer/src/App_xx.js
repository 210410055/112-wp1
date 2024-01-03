import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_xx from './pages/HomePage_xx';
import BlogContext1_xx from './pages/blogs/BlogContext1_xx';
import BlogContext2_xx from './pages/blogs/BlogContext2_xx';

const App_xx = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_xx />} />
        <Route path='/context1_xx' element={<BlogContext1_xx />} />
        <Route path='/context2_xx' element={<BlogContext2_xx />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_xx;
