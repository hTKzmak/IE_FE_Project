import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom'

import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import BasketPage from './pages/BasketPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categoires' element={<CategoriesPage />} />
        <Route path='/allproducts' element={<ProductsPage />} />
        <Route path='/allsales' element={<ProductsPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
