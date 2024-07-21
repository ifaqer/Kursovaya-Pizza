import React from 'react'
import styles from "./Search.module.scss"

export default function Search({setSearch, search}){
  return (
    <>
    {search && (
    <svg className={styles.krest} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{
      setSearch('')
    }}>
    <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )}
    <input className={styles.search} value={search} placeholder="Поиск пиццы..." type="text" onChange={(val)=>{
        setSearch(val.target.value)
    }}/>
    </>
  )
}
