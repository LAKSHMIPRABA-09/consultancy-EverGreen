/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import './App.css'
import Navbar  from './Components/Navbar/Navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginsignUp from './Pages/LoginsignUp'
function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shopcategory category=""/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginsignUp/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
