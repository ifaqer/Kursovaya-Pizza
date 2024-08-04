import empty from '../../assets/img/empty-cart.png'
import styles from "./EmptyCart.module.scss"
import { Link } from 'react-router-dom'

export default function EmptyCart(){
  return (
    <div className={styles.root}>
        <h1>Корзина пустая</h1>
        <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
        <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        <img src={empty} className={styles.img} alt="Empty" />
        <Link to="/" className={styles.button}>Вернуться назад</Link>
    </div>
  )
}