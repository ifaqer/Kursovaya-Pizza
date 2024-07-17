import React from "react"

export default function Categories({enterCategories, setEnterCategories}){
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