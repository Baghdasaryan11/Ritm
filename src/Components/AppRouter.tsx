import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Categories from "../Pages/Categories";
import Category from "../Pages/Category";
import CategoryItem from "../Pages/CategoryItem";
import Cooperate from "../Pages/Cooperate";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Partners from "../Pages/Partners";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='cooperate' element={<Cooperate />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='partners' element={<Partners />} />
        <Route path='categories' element={<Categories />} />
        <Route path='categories/:type' element={<Category />} />
        <Route path='categories/:type/:id' element={<CategoryItem />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
