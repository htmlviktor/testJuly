import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "./pages/main/mainPage";
import CategoriesPage from "./pages/categories/categoriesPage";
import {useEffect, useState} from "react";
import getMovies from "./fetchProxy";

function App() {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentList, setList] = useState([]);
    const [activeCategory, setCategory] = useState('');

    const handleCategoryClick = (name) => {
        const list = data.filter(it => it.category === name);
        setList(list);
        setCategory(name);
    }

    useEffect(() => {
        getMovies().then(res => {
            const categories = [...new Set(res.data.map(it => it.category))];
            setData(res.data);
            setCategories(categories);
            setCategory(categories[0]);
        });
    }, [])
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPage data={data} categories={categories} />} />
                  <Route path="/categories" element={<CategoriesPage data={data} activeCategory={activeCategory} categories={categories} currentList={currentList} onClick={handleCategoryClick} />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
