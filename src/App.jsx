import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

const App = () => {

  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:categoriaId'element={<ItemListContainer />} />
        <Route exact path='/producto/:id'  element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      
      </Routes>

    </BrowserRouter>
  )

}

export default App