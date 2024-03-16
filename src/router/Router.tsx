import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter >
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="notfound" />} />
        <Route path="notfound" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
