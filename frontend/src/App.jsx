{/* necessary imports such as all the pages from the website, components and react-router-dom */}
import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

{/* App component renders the main page of the website, routes and organizes in a logical structure (top to bottom) that is easy for the user */}
const App = () => {
  return (
    <div className= 'bg-purple-200 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer /> {/* ToastContainer is used to display notifications */}
      <Navbar /> {/* Navbar component renders the navigation bar of the website */}
      <SearchBar /> {/* SearchBar component renders the search bar of the website */}
      <Routes> {/* Routes component is used to define the routes of the website */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer /> {/* Footer component renders the footer of the website */}
    </div>
  )
}

export default App
