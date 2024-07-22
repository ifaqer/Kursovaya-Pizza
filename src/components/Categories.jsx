import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

export default function Categories(){
  const enterCategories = useSelector(state=>state.filterSlice.categoryId)
  const dispatch = useDispatch()
  const setEnterCategories = (id) => {
    dispatch(setCategoryId(id))
  }
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
                    setEnterCategories(index)
                  }}
                  className={enterCategories == index ? "active" : ''}>
                  {title}
              </li>
            ))}
          </ul>
        </div>
    )
}