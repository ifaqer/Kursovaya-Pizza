import React from 'react'
import styles from './styles.module.scss'

function EditDialog ({setEditDialog, pizzas}){
  return (
    <div className={styles.backgroundEdit}>
        <div className={styles.windowEdit}>
            <h3 onClick={()=>setEditDialog(false)}>Вернуться</h3>
            <h3>Добавить новый товар</h3>
            {console.log(pizzas)}
            {pizzas.map((obj)=>(
                <div className='elementEdit'>
                    <p>{obj.title}</p>
                    <input type="text"></input>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EditDialog
