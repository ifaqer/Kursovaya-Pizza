import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sortId: 'rating',
    categoryId: 0,
    search: '',
  },
  reducers: {
    setSortId(state, action){
      state.sortId = action.payload
    },
    setCategoryId(state, action){
      state.categoryId = Number(action.payload)
    },
    setSearch(state, action){
      state.search = action.payload
    },
    setFiltersUrl(state, action){
      state.categoryId = Number(action.payload.category),
      state.sortId = action.payload.enterSorted
    }
  }
})

export const { setSortId, setCategoryId, setSearch, setFiltersUrl } = filterSlice.actions

export default filterSlice.reducer