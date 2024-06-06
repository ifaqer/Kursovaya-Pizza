import React from 'react'
import ready from '../../assets/img/ready.png'
import styles from "./Ready.module.scss"
import { Link } from 'react-router-dom'

export default function Ready(){
  return (
    <div className={styles.root}>
        <img src={ready} className={styles.img} alt="Empty" />
        <h1>Ваш заказ принят!</h1>
        <p>Спасибо что выбрали именно нас</p>
        <Link to="/" className={styles.button}>Вернуться назад</Link>
    </div>
  )
}