import React from 'react'
import Header from './Components/Header.js';
import Home from './Components/Home.js'
import Products from './Components/Products.js'
// import About from './Components/About.js';
import Error from './Components/Error.js';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import NewProduct from './Components/NewProduct.js'
import DefaultProduct from './Components/DefaultProduct.js';
import FeaturedProduct from './Components/FeautedProduct.js';
import Users from './Components/Users.js';
import UserDetails from './Components/UserDetails.js';
import Admin from './Components/Admin.js';
import { Routes, Route } from 'react-router-dom';
import OrderSummary from './Components/OrderSummary.js';
const LazyAbout = React.lazy(() => import('./Components/About.js')); //Dynamic Import


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={
          <React.Suspense fallback={'Loading...'}>
            <LazyAbout />
          </React.Suspense>
        }/>
        <Route path='/products' element={<Products/>}>
          <Route index element={<DefaultProduct/>}/>
          <Route path='default' element={ <DefaultProduct /> }/>
          <Route path='new' element={ <NewProduct/> }/>
          <Route path='featured' element={ <FeaturedProduct/>}/>
        </Route>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='users' element={ <Users /> }>
          <Route path=':userId' element= { <UserDetails /> } /> 
          {/* Dynamic Route */}
          <Route path='admin' element={ <Admin />} />
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

{/* <></>  === React Fragment */}
//We can use useNavigate to navigate with event for example onClick event 
//I don't need to use Link component to navigate just call useNavigate hook to navigate other pages
//navigate(-1) navigate yapipi navigate kullandigim yere geri donebilmek icin useNavigate(-1) kullanabiliirz
//Nested links are relative links they can't take '/' they should be combined with parent route
