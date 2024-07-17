import React from 'react'
import Axios from "axios"

import Sorted from '../components/Sorted'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import EditDialog from '../components/EditDialog'

import editlogo from "../assets/img/edit-icon.png"
import cancelLogo from "../assets/img/cancelEdit.png"
import plus from "../assets/img/plus.png"

export default function Home({addToCartTovar, setAddToCartTovar, buyCount, setBuyCount, setBuySumma, buySumma}){
    const [enterCategories, setEnterCategories] = React.useState(0)
    const [enterSorted, setEnterSorted] = React.useState('rating')
    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [editDialog, setEditDialog] = React.useState(false)
    const [clickAdd, setClickAdd] = React.useState(false)
    React.useEffect(()=>{
        setIsLoading(true)
        Axios.get(`https://65db02b53ea883a15290ffe7.mockapi.io/items` +
            ( enterCategories ? `?category=` + enterCategories + `&sortby=` + enterSorted : `?sortby=` + enterSorted )
            ).then((obj)=>{
            setPizzas(obj.data)
            setIsLoading(false)
        })
    }, [enterCategories, enterSorted])
  return (
    <>
    {clickAdd && <EditDialog setClickAdd={setClickAdd}/>}
    <div className="content__top">
        <Categories enterCategories={enterCategories} setEnterCategories={setEnterCategories}/>
        <Sorted setEnterSorted={setEnterSorted}/>
    </div>
    <div className='wrapperedit'>
        <h2 className="content__title">Все пиццы</h2>
        {!isLoading && <img src={!editDialog ? editlogo : cancelLogo} className="editlogo" alt="edit-logo" onClick={()=>setEditDialog((prev)=>!prev)}/>}
    </div>
    <div className="content__items">
    {
        isLoading ? [...new Array(8)].map((_, index)=><Skeleton key={index}/>) :
        (pizzas.map((obj, index)=>(
            <PizzaBlock {...obj} obj={obj} key={obj.id} pizzas={pizzas} setPizzas={setPizzas} editDialog={editDialog} addToCartTovar={addToCartTovar} setAddToCartTovar={setAddToCartTovar} buyCount={buyCount} setBuyCount={setBuyCount} setBuySumma={setBuySumma} buySumma={buySumma}/>
        )))
    }
    {editDialog && <div className="block-added" onClick={()=>{
        setClickAdd(true)
        window.scrollTo(0, 0)
    }}>
    <img src={plus} alt="added" />
    <p>Добавить товар</p> 
    </div>}
    </div>
    </>
  )
}