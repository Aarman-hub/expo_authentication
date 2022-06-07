import React from 'react'
import styled from 'styled-components/native';


const StyleView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin-top:15px;
`;

const RowContainer = (props) => {
  return (
    <StyleView {...props}>
      {props.children}
    </StyleView>
  )
}

export default RowContainer
