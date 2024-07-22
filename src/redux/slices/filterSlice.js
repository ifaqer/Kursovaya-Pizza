import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sortId: 0,
    categoryId: 0,
    sort: {
      name: "популярности",
      sortProperty: "rating"
    }
  },
  reducers: {
    setSortId(state, action){
      state.sortId = action.payload
    },
    setCategoryId(state, action){
      state.categoryId = action.payload
    }
  }
})

export const { setSortId, setCategoryId } = filterSlice.actions

export default filterSlice.reducer