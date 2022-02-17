import * as React from 'react'
import * as ReactRedux from 'react-redux'
import {Presentational as CreateBoardPresentational} from './presentational'
import * as Slice from './slice'

export const CreateBoard = () => {
    const dispatch = ReactRedux.useDispatch()
    const onClickCreate = React.useCallback((name: string)=> {
        console.log("name", name)
        dispatch(Slice.actions.createBoard(name))
    },[])
    
    return <CreateBoardPresentational onClickCreate={onClickCreate}/>
}