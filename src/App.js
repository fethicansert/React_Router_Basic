import React from 'react'
import Header from './Components/Header.js';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import Menu from './Components/Menu.js'
import FoodMenu from './Components/FoodMenu.js';
import DrinkMenu from './Components/DrinkMenu.js';
import DessertMenu from './Components/DessertMenu.js';
import { Routes, Route} from 'react-router-dom'
import About from './Components/About.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About /> }/>
       <Route path='/menu' element={<Menu /> }>
        <Route index element={<FoodMenu />}/>
        <Route path='food' element={<FoodMenu />}></Route>
        <Route path='drink' element={<DrinkMenu />}></Route>
        <Route path='dessert' element={<DessertMenu />}></Route>
       </Route>
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
