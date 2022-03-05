import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import { Env } from '../constants'

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#correct-typings-for-the-dispatch-type
 */

export const store = configureStore({
  reducer: rootReducer,
  devTools: Env.NODE_ENV === 'development',
})
