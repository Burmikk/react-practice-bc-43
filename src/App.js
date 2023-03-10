import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import { BlogCard } from './components/BlogCard/BlogCard';
import { Statistics } from './components/Statistics/Statistics';
import { Forbes } from './components/ForbesList/Forbes';
import article from './data/article.json';
import statistics from './data/statistics.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';
import { Transactions } from './components/Transactions/Transactions';
import Basket from './components/Basket/Basket';
import basket from './data/data.basket.json';
// import { ContactsPage } from './components/Contacts/ContactsPage/ContactsPage';
import { AccordionItem } from './components/AccordionItem/AccordionItem';
import { Pokemon } from './components/Pokemon/Pokemon';
import Faq from './components/FAQ/Faq';
import dataFaq from './data/faq.json';
import Images from './components/Images/Images';
import StarWars from './components/StarWars/StarWars';
import NavBar from './components/NavBar/NavBar';
import { ThemeContext } from './Context/ThemeContext';
import { useContext, useEffect } from 'react';
import PagesMenu from './components/PagesMenu/PagesMenu';
import HomePage from './pages/HomePage/HomePage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import ProductsPartnersPage from './pages/ProductsPartnersPage/ProductsPartnersPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import { StarWarsPage } from './pages/StarWarsPage/StarWarsPage';
import { HeroPage } from './pages/HeroPage/HeroPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import Cart from './pages/Cart/Cart';
import { currentUser } from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';

function App() {
  const { state } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* <Route path="/products-partners" element={<ProductsPartnersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/heroes" element={<StarWarsPage />} />
        <Route path="/heroes/:id" element={<HeroPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div className={state === 'light' ? 'App' : 'appDark'}>
        {/* <NavBar />
      <ContactsPage /> */}
        {/* <Basket data={basket} /> */}
        {/* <BlogCard {...article} />
      <Statistics data={statistics} title="Main Statistics" />
      <Statistics data={statistics} />
      <Forbes list={forbes} title="hello" />
      <Forbes list={forbes} />
      <Transactions items={transactions} /> */}
        {/* <AccordionItem /> */}
        {/* <Faq data={dataFaq} /> */}
        {/* <StarWars/> */}
        {/* <Images /> */}
        {/* <Pokemon /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
