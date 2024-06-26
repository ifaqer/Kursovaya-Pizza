import React from 'react'
import Axios from "axios"

import News from '../components/News'
import Sorted from '../components/Sorted'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

export default function Home({addToCartTovar, setAddToCartTovar, buyCount, setBuyCount, setBuySumma, buySumma}){
    const [enterCategories, setEnterCategories] = React.useState(0)
    const [enterSorted, setEnterSorted] = React.useState('rating')
    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
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
    <div className='NewsContent'><News/></div>
    <div className="content__top">
        <Categories enterCategories={enterCategories} setEnterCategories={setEnterCategories}/>
        <Sorted setEnterSorted={setEnterSorted}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
    {
        isLoading ? [...new Array(8)].map((_, index)=><Skeleton key={index}/>) :
        (pizzas.map((obj, index)=>(
            <PizzaBlock {...obj} obj={obj} key={obj.id} addToCartTovar={addToCartTovar} setAddToCartTovar={setAddToCartTovar} buyCount={buyCount} setBuyCount={setBuyCount} setBuySumma={setBuySumma} buySumma={buySumma}/>
        )))
    }
    </div>
    </>
  )
}