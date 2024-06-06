import React from 'react'
import {Routes, Route} from "react-router-dom"
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from "./pages/Cart"
import NotFound from './pages/NotFound'
import Ready from './components/Ready'

export default function App() {
  const [buyCount, setBuyCount] = React.useState(0)
  const [buySumma, setBuySumma] = React.useState(0)
  const [addToCartTovar, setAddToCartTovar] = React.useState([])
  return (
    <div className="wrapper">
      <Header buyCount={buyCount} buySumma={buySumma}/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home addToCartTovar={addToCartTovar} setAddToCartTovar={setAddToCartTovar} buyCount={buyCount} buySumma={buySumma} setBuySumma={setBuySumma} setBuyCount={setBuyCount}/>}></Route>
            <Route path='/cart' element={<Cart buyCount={buyCount} setBuyCount={setBuyCount} buySumma={buySumma} setBuySumma={setBuySumma} addToCartTovar={addToCartTovar} setAddToCartTovar={setAddToCartTovar}/>}></Route>
            <Route path='/Ready' element={<Ready/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

