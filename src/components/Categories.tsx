import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

export default function Categories(){
  const enterCategories = useSelector((state:any)=>state.filterSlice.categoryId)
  const dispatch = useDispatch()
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые"
  ]
    return(
        <div className="categories">
          <ul>
            {categories.map((title, index)=>(
              <li key={index}
                  onClick={()=>{
                    dispatch(setCategoryId(index))
                  }}
                  className={enterCategories == index ? "active" : ''}>
                  {title}
              </li>
            ))}
          </ul>
        </div>
    )
}