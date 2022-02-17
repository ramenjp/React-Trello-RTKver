import * as React from 'react'
import styled from 'styled-components'

type Props = {
    id: string
    name: string
};

export const Component:React.FC<Props> = (props):React.ReactElement => {
    return (
        <Wrap>
            {props.name}
        </Wrap>
    )
};

export default Component

const Wrap = styled.div`
    background-color: gray;
    color: white;
    padding: 40px 20px;
    width: 150px;
    font-weight: bold;
    font-size:24px;
`