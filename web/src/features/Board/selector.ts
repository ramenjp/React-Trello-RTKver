import { RootState } from '../../store'
import * as ReduxToolkit from '@reduxjs/toolkit'

export const stateSelector =  (state: RootState) => state.createBoard

export const boardList = ReduxToolkit.createSelector(stateSelector,(state)=>state.boardList)