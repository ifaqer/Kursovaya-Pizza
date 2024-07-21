import React from 'react'
import styles from "./Search.module.scss"

export default function Search({setSearch}){
  return (
    <>
    <input className={styles.search}  placeholder="Поиск пиццы..." type="text" onChange={(val)=>{
        setSearch(val.target.value)
    }}/>
    </>
  )
}
