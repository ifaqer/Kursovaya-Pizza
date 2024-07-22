import React from 'react'
import Axios from "axios"

import { useSelector } from 'react-redux'

import Search from '../components/Search'
import Sorted from '../components/Sorted'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

export const MyContext = React.createContext()

export default function Home({addToCartTovar, setAddToCartTovar, buyCount, setBuyCount, setBuySumma, buySumma}){
    const enterSorted = useSelector(state=>state.filterSlice.sortId)
    const enterCategories = useSelector(state=>state.filterSlice.categoryId)
    
    const [search, setSearch] = React.useState('')
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
    <MyContext.Provider value={{search, setSearch, setPizzas, addToCartTovar, setAddToCartTovar, buyCount, setBuyCount, setBuySumma, buySumma}}>
    <div className="content__top">
        <Categories/>
        <Sorted/>
    </div>
    <div className='wrapperedit'>
        {search ? <h2 className="content__title">Поиск по запросу: {search}</h2> : <h2 className="content__title">Все пиццы</h2>}
        <div className='baseEdit'>
            <Search/>
        </div>
    </div>
    <div className="content__items">
    {
        isLoading ? [...new Array(8)].map((_, index)=><Skeleton key={index}/>) :
        (pizzas.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())).map((obj, index)=>(
        <PizzaBlock {...obj} obj={obj} key={index}/>
        )))
    }
    </div>
    </MyContext.Provider>
    </>
  )
}