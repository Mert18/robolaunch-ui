import { combineReducers } from 'redux'
import postsReducer from './posts/postsSlice'

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const rootReducer = combineReducers({
  posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
