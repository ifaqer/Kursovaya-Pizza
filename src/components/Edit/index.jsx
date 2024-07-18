import React from 'react'
import styles from './styles.module.scss'
import Axios from 'axios'

function Edit({setEdit, editObject}){
    const [titleNew, setTitleNew] = React.useState('')
    const [imageUrlNew, setImageUrlNew] = React.useState('')
    const [priceNew, setPriceNew] = React.useState()
    const [typesNew, setTypesNew] = React.useState()
    const [sizesNew, setSizesNew] = React.useState()
  return (
    <div className={styles.backgroundEdit}>
        <div className={styles.windowEdit}>
            <h3 onClick={()=>setEdit(false)}>Вернуться</h3>
            <div onClick={()=>{
                let a = prompt('Название продукта:', '')
                setTitleNew(a)
            }}>
                {titleNew ? titleNew : editObject.title}
            </div>
            <div className={styles.url} onClick={()=>{
                let a = prompt('Вставьте URL картинки:', '')
                setImageUrlNew(a)
            }}>
                {imageUrlNew ? imageUrlNew : editObject.imageUrl}
            </div>
            <div onClick={()=>{
                let a = prompt('Укажите через пробел (0 - тонкое, 1 - традиционное):', '')
                a = a.split(' ')
                for (let i = 0; i < a.length; i++){
                    a[i] = Number(a[i])
                }
                setTypesNew(a)
            }}>
                <span>
                {
                !typesNew ? editObject.types.map((type)=>{ return (!type ? <span>тонкое </span> : <span>традиционное </span>)}) :
                 typesNew.map((type)=>{ return (!type ? <span>тонкое </span> : <span>традиционное </span>)})
                }
            </span>
            </div>
            <div onClick={()=>{
                let a = prompt('Размеры продукции через пробел (26, 30, 40):', '')
                a = a.split(' ')
                for (let i = 0; i < a.length; i++){
                    a[i] = Number(a[i])
                }
                setSizesNew(a)
            }}>
                <span>
                {
                !sizesNew ? editObject.sizes.map((size)=>(<span>{size} см. </span>)) :
                 sizesNew.map((size)=>(<span>{size} см. </span>))
                }
                </span>
            </div>
            <div onClick={()=>{
                let a = prompt('Стоимость продукции:', '')
                setPriceNew(Number(a))
            }}>
                {
                !priceNew ? <span>от {editObject.price}р. </span> :
                <span>от {priceNew}р. </span>
                }
            </div>
            <h3 onClick={()=>{
                let newObjectItem = {}
                titleNew && (
                    newObjectItem.title = titleNew,
                    editObject.title = titleNew
                )
                imageUrlNew && (
                    newObjectItem.imageUrl = imageUrlNew,
                    editObject.imageUrl = imageUrlNew
                )
                priceNew && (
                    newObjectItem.price = priceNew,
                    editObject.price = priceNew
                )
                typesNew && (
                    newObjectItem.types = typesNew,
                    editObject.types = typesNew
                )
                sizesNew && (
                    newObjectItem.sizes = sizesNew,
                    editObject.sizes = sizesNew
                )
                newObjectItem && Axios.put(`https://65db02b53ea883a15290ffe7.mockapi.io/items/${editObject.id}`, newObjectItem)
                setEdit(false)
            }}>Обновить товар</h3>
        </div>
    </div>
  )
}

export default Edit