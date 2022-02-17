import * as ReduxToolkit from '@reduxjs/toolkit'
import * as createBoard from '../features/Board/slice'

export type RootState = ReturnType<typeof reducer>

export const reducer = ReduxToolkit.combineReducers({
    createBoard: createBoard.reducer
})

export default ReduxToolkit.configureStore({
    reducer  
})