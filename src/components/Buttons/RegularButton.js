import React from 'react'
import styled from 'styled-components/native'
import {colors} from '../../helpers/colors';
import RegularText from '../Text/RegularText';

const {primary, accent, secondary} = colors;

const ButtonView = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 60px;
`;


const RegularButton = (props) => {
  return (
    <ButtonView {...props}>
      <RegularText styled={[{colors: primary},{...props?.textStyle}]}>{props.children}</RegularText>
    </ButtonView>
  )
}

export default RegularButton;