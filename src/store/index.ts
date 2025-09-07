import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import rootReducer from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: rootReducer,
})

export const useAppDispatch = () => useDispatch<RootDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
