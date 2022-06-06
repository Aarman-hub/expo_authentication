import React from 'react'
import KeyboardAvoidingContainer from '../../components/container/KeyboardAvoidingContainer'
import MainContainer from '../../components/container/MainContainer'
import {View, Text} from 'react-native';
import RegularText from '../../components/Text/RegularText';
import StyledText from '../../components/Input/StyledTextInput';
import {Formik} from 'formik';




const Login = () => {
  return (
    <MainContainer>
        <KeyboardAvoidingContainer>
          <RegularText>Textsssss</RegularText>
          <Formik initialValues={{email:'', password:''}}>
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=>(
              <>
                <StyledText label="Email Address" icon="email-variant" placeholder="E-Mail" />
              </>
            )}
          </Formik>
        </KeyboardAvoidingContainer>
    </MainContainer>
  )
}

export default Login