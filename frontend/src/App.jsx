import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import StoreContextProvider from './Context/StoreContext'

const App = () => {
  return (
    <BrowserRouter>
    <StoreContextProvider>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    </StoreContextProvider>
    </BrowserRouter>
  )
}

export default App