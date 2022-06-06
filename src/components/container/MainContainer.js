import React from 'react'


import styled from 'styled-components/native'
import { StatusBarHeight } from '../../helpers/shared'
import { colors } from '../../helpers/colors'
const { primary } = colors;

const StyledView = styled.View`
    flex:1;
    padding: 50px 20px 0 20px;
    background-color: ${primary};
    `;

const MainContainer = (props) => {
  return (
    <StyledView {...props}>
      {props.children}
    </StyledView>
  )
}

export default MainContainer
