import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

type cursorState = {
  value: string,
  rect: {
    top: number,
    right: number,
    bottom: number,
    left: number
  }
}

type btnPayload = {
  top: number,
  right: number,
  bottom: number,
  left: number
}

const initialState = {
  value: 'default',
  rect: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    enterText: (state: cursorState) => (
      {
        ...state,
        value: 'text'
      }
    ),
    leaveText: (state: cursorState) => (
      {
        ...state,
        value: 'default'
      }
    ),
    enterButton: (state: cursorState, action: PayloadAction<btnPayload>) => (
      {
        ...state,
        value: 'button',
        rect: {
          top: action.payload.top,
          right: action.payload.right,
          bottom: action.payload.bottom,
          left: action.payload.left
        }
      }
    )
  }
})

export const { enterText, leaveText, enterButton } = cursorSlice.actions;

export const getCursorEffect = (state: RootState) => state.cursor;

export const store = configureStore({
  reducer: {
    cursor: cursorSlice.reducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
