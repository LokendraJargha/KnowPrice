import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import ComparePage from "./pages/comparePage/ComparePage";
import SpecsCompare from "./pages/specsCompare/SpecsCompare";
import ProductDescription from "./pages/productDescription/ProductDescription";
import AppLayout from "./layouts/AppLayout";
import Container from "./components/commons/Container";
import { useEffect } from "react";
import BlogPost from "./pages/BlogPage/BlogPost";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/");
  // }, []);
  

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="gadgets/:slug" element={<ProductDescription />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="compare/:compareid" element={<SpecsCompare />} />
        <Route path="compares" element={<ComparePage />} />
      </Route>
    </Routes>
  );
}

export default App;
