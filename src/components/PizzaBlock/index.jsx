import React from "react"

export default function PizzaBlock({obj, id, imageUrl, title, types, sizes, price, setBuyCount, setBuySumma, addToCartTovar, setAddToCartTovar}){
    const [count, setCount] = React.useState(0)
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const addToCart = ()=>{
        setBuyCount((prev)=>prev+1)
        setBuySumma((prev)=>prev+price)
        setAddToCartTovar((prev)=>[...prev, obj])
        console.log(addToCartTovar)
    }
    return(
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza"/>
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
                <div className="button button--outline button--add" onClick={()=>setCount((prev)=>prev+1)}>
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
                <span onClick={()=>addToCart()}>Добавить</span>
                <i>{count}</i>
                </div>
            </div>
        </div>
        </div>
    )
}