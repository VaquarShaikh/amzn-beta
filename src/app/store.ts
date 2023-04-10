import {
	configureStore,
	createEntityAdapter,
	createListenerMiddleware,
	getDefaultMiddleware,
} from "@reduxjs/toolkit"
import basketReducer, {
	addToBasket,
	removeFromBasket,
} from "../features/basketSlice"

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
	actionCreator: addToBasket,
	effect: (action, listenerApi) => {
		localStorage.setItem(
			"count",
			JSON.stringify((listenerApi.getState() as RootState).basket)
		)
	},
})
export const store = configureStore({
	reducer: { basket: basketReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
