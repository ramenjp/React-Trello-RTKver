import * as React from 'react'
import styled from 'styled-components'
import {useFormik} from 'formik'

type Props = {
    onClickCreate:(name:string) => void
}

type InitialValues = {
    boardName: string
}
const initialValues: InitialValues = {
    boardName: ''
}

export const Presentational:React.FC<Props> = (props) =>{
    const formik = useFormik({
        initialValues,
        onSubmit:(value)=> {
            props.onClickCreate(value.boardName)
        }
    })
    return <Wrap>
        <form onSubmit={formik.handleSubmit} name="createBoard" id="createBoard">
            <input type="text" name="boardName" onChange={formik.handleChange} />
            <input type="submit" value="作成する"/>
        </form>
    </Wrap>
}


const Wrap = styled.div`
    padding: 40px;
    display: flex;
    &+& {
        margin-left: 40px;
    }
`