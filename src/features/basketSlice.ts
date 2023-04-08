import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { basketState } from "../types/reduxtypes"
import { Product } from "../types/producttypes"

const initialState: basketState = {
	items: [],
}

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addToBasket: (state, action: PayloadAction<Product>) => {
			state.items = [...state.items, action.payload]
		},
		removeFromBasket: (state, action: PayloadAction<Product>) => {},
	},
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectItems = (state: RootState) => state.basket.items

export default basketSlice.reducer
