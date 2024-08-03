import {Routes, Route} from "react-router-dom"

import MainStatic from './components/MainStatic'
import Home from './pages/Home'
import Cart from "./pages/Cart"
import NotFound from './pages/NotFound'
import Ready from './components/Ready'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainStatic/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='Ready' element={<Ready/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

