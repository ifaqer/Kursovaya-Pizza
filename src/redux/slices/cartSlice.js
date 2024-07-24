import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    countItems: 0,
    items: []
  },
  reducers: {
    addItem(state, action){
      const findItem = state.items.find(obj=>obj.id==action.payload.id)
      console.log(findItem)
      if(findItem){
        findItem.count++
      } else {
        state.items.push({...action.payload, count: 1})
      }
      state.totalPrice += action.payload.price
      state.countItems++
    },
    removeItem(state, action){
      state.items = state.items.filter((obj)=>{state.items != obj.id})
      state.totalPrice -= action.payload.price
      state.countItems--
    },
    clearItems(state){
      state.items = []
      state.countItems = 0
      state.totalPrice = 0
    }
  }
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer