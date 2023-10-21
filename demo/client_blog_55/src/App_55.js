import { BrowserRouter, Routes,Route } from "react-router-dom";

import BlogStaticPage55 from "./pages/blogstaticpage_55"
const App_55 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/static_55" 
      element={< BlogStaticPage55 />} />
    </Routes>
    </BrowserRouter>

  );
};

export default App_55;
