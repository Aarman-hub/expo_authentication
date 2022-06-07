import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../helpers/colors';
import SmallText from './SmallText';

const {accent} = colors;

const StyledPressableText = styled.Pressable`
    padding-vertical: 5px;
    align-self: center;
`;

const PressableText = (props) => {
  return (
    <StyledPressableText onPress={props.onPress} {...props}>
      <SmallText style={{color:accent}}>{props.children}</SmallText>
    </StyledPressableText>
  )
}

export default PressableText
