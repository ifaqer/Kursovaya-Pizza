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
      const findItem = state.items.find(obj=>(obj.type==action.payload.type && obj.id==action.payload.id))
      if(!findItem){
        state.items.push({...action.payload, count: 1})
      } else {
        findItem.count++
      }
      state.totalPrice += action.payload.price
      state.countItems++
    },
    plusItem(state, action){
      const findItem = state.items.find(obj=>(obj.type==action.payload.type && obj.id==action.payload.id))
      state.totalPrice += action.payload.price
      findItem.count++
      state.countItems++
    },
    minusItem(state, action){
      const findItem = state.items.find(obj=>(obj.type==action.payload.type && obj.id==action.payload.id))
      findItem.count--
      state.countItems--
      state.totalPrice -= action.payload.price
    },
    removeItem(state, action){
      const findItem = state.items.find(obj=>(obj.type==action.payload.type && obj.id==action.payload.id))
      state.items = state.items.filter(obj=>obj!=findItem)
      state.totalPrice -= findItem.price*findItem.count
      state.countItems -= findItem.count
    },
    clearItems(state){
      state.items = []
      state.countItems = 0
      state.totalPrice = 0
    }
  }
})

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions

export default cartSlice.reducer