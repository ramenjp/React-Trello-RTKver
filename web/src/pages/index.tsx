import React from 'react'
import {CreateBoard} from '../features/Board'
import Board from '../component/Board'
import * as BoardSelector from '../features/Board/selector'
import * as ReactRedux from 'react-redux'
import styled from 'styled-components'


export const Component = () => {
    const boardList = ReactRedux.useSelector(BoardSelector.boardList)
    
    return (
        <>
        <CreateBoard />
        <Wrap>
        {boardList.map((n)=> (
            <Item>
            <Board id="1" name={n} />
            </Item>
        ))}
        </Wrap>
        </>
        )
        
}

export default Component

const Wrap = styled.div`
    display: flex;
  
`
const Item = styled.div`
  & + & {
        margin-left: 20px;
    }
`