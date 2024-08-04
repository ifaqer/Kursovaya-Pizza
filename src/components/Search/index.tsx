import React from 'react'
import styles from "./Search.module.scss"
import debounce from 'lodash.debounce'
import { setSearch } from '../../redux/slices/filterSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Search(){
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const search = useSelector((state:any)=>state.filterSlice.search)
  const [searchValue, setSearchValue] = React.useState('')
  const updateSearch = (event:any)=>{
    setSearchValue(event.target.value)
    zaderjka(event.target.value)
  }
  const zaderjka = React.useCallback(
    debounce((value)=>{dispatch(setSearch(value))}, 400),
    []
  )
  return (
    <>
    {search && (
    <svg className={styles.krest} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{
      dispatch(setSearch(''))
      setSearchValue('')
      inputRef.current?.focus()
    }}>
    <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )}
    <input ref={inputRef} className={styles.search} value={searchValue} placeholder="Поиск пиццы..." type="text" onChange={(event)=>{
        updateSearch(event)
    }}/>
    </>
  )
}
