import * as ReduxToolkit from '@reduxjs/toolkit'

type State = {
    boardList: string[]
}

const initialState:State = {
    boardList: []
}

const slice = ReduxToolkit.createSlice({
    name: 'createBoard',
    initialState,
    reducers: {
        createBoard: (state,action: ReduxToolkit.PayloadAction<string>)=> {
            state.boardList = state.boardList.concat(action.payload)
        }
    }
})

export const {reducer, actions} = slice