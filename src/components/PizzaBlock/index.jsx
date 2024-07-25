import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "../../redux/slices/cartSlice"

export default function PizzaBlock({ obj, id, imageUrl, title, types, sizes, price}){
    const dispatch = useDispatch()
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const findItem1 = useSelector(state=>state.cart.items.find(obj=>(obj.id == id && obj.type == activeType)))
    const findItem2 = useSelector(state=>state.cart.items.find(obj=>(obj.id == id && obj.type != activeType)))
    const count = (findItem1 ? findItem1.count : 0)+(findItem2 ? findItem2.count : 0)
    const addToCart = ()=>{
        const newItem = {
            id,
            imageUrl,
            title,
            type: activeType,
            size: activeSize,
            price
        }
        dispatch(addItem(newItem))
    }
    return(
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
            <div className="edit">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza"/>
            </div>
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>{types.map((type, index)=>(
                    <li
                        key={index}
                        className={index == activeType ? "active" :  ''}
                        onClick={()=>setActiveType(index)}>
                        {type == 0 ? "тонкое" :  "традиционное"}
                    </li>
                    ))}
                </ul>
                <ul>{sizes.map((s, index)=>(
                    <li
                        key={index}
                        className={index == activeSize ? "active"  : ''}
                        onClick={()=>setActiveSize(index)}>
                        {s} см.
                    </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add" onClick={addToCart}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                    />
                </svg>
                <span>Добавить</span>
                {(findItem1 || findItem2) && (<i>{count}</i>)}
                </div>
            </div>
        </div>
        </div>
    )
}