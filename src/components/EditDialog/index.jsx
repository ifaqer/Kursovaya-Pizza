import React from 'react'
import Axios from 'axios'
import styles from './styles.module.scss'

function EditDialog ({setClickAdd, setPizzas}){
  const title = React.useRef()
  const url = React.useRef()
  const price = React.useRef()
  const size26 = React.useRef()
  const size30 = React.useRef()
  const size40 = React.useRef()
  const tonkoe = React.useRef()
  const tradic = React.useRef()
  return (
    <div className={styles.backgroundEdit}>
        <div className={styles.windowEdit}>
            <h3 onClick={()=>setClickAdd(false)}>Вернуться</h3>
            <form action="get">
              <div>
              <label from="title">Название продукта: </label>
              <input required ref={title} type="text" id="title" name="title"/>
              </div>
              <div>
              <label from="url">URL картинка (240x240 рекомендуется): </label>
              <input ref={url} required type="url" id="url" name="imageUrl"/>
              </div>
              <div>
              <label from="price">Стоимость: </label>
              <input ref={price} required type="number" id="price" name="price"/>
              </div>
              <div>
              <label>
                <span>26см. </span>
                <input ref={size26} type="checkbox"/>
              </label>
              <label>
                <span>30см. </span>
                <input ref={size30} type="checkbox"/>
              </label>
              <label>
                <span>40см. </span>
                <input ref={size40} type="checkbox"/>
              </label>
              </div>
              <div>
              <label>
                <span>тонкое тесто </span>
                <input ref={tonkoe} type="checkbox"/>
              </label>
              <label>
                <span>традиционное тесто </span>
                <input ref={tradic} type="checkbox"/>
              </label>
              </div>
              <div>
                <h3 onClick={()=>{
                  if((!size26.current.checked &&
                    !size30.current.checked &&
                    !size40.current.checked) || (!tonkoe.current.checked && !tradic.current.checked)){
                      alert('Выбор размера и типа ОБЯЗАТЕЛЬНО!')
                  } else {
                  let newItem = {
                    imageUrl: url.current.value,
                    title: title.current.value,
                    price: Number(price.current.value),
                    sizes: [],
                    rating: 0, // новенький, еще не популярный!
                  }
                  if (size26.current.checked) newItem.sizes.push('26')
                  if (size30.current.checked) newItem.sizes.push('30')
                  if (size40.current.checked) newItem.sizes.push('40')
                  if (tonkoe.current.checked && tradic.current.checked){
                    newItem.types = [0, 1] }
                  else if (tonkoe.current.checked && !tradic.current.checked){
                    newItem.types = [0] }
                  else if (!tonkoe.current.checked && tradic.current.checked){
                    newItem.types = [1] }
                  Axios.post("https://65db02b53ea883a15290ffe7.mockapi.io/items", newItem)
                  setPizzas((prev)=>[...prev, newItem])
                  setClickAdd(false)}
                  }}>Добавить новый продукт</h3>
              </div>
            </form>
        </div>
    </div>
  )
}

export default EditDialog
