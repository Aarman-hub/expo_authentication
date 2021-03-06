import React, {useState} from 'react'
import KeyboardAvoidingContainer from '../../components/container/KeyboardAvoidingContainer'
import MainContainer from '../../components/container/MainContainer'
import {View, Text} from 'react-native';
import RegularText from '../../components/Text/RegularText';
import StyledText from '../../components/Input/StyledTextInput';
import {Formik} from 'formik';
import {ActivityIndicator} from 'react-native';
import MsgBox from '../../components/Text/MsgBox';
import RegularButton from '../../components/Buttons/RegularButton';
import { colors } from '../../helpers/colors';
import RowContainer from '../../components/container/RowContainer';
import PressableText from '../../components/Text/PressableText';

const {primary} = colors;



const Login = () => {


  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleLogin = async (credentials, setSubmitting) =>{
    try {
      
      setSubmitting(false);
    } catch (error) {
      
      setMessage('Login failed: ' + error.message);
      setSubmitting(false)
    }
  }
  return (
    <MainContainer>
        <KeyboardAvoidingContainer>
          <RegularText>Textsssss</RegularText>
          <Formik initialValues={{email:'', password:''}} handleSubmit={(values,{setSubmitting})=>{
            if(values.email == "" || values.password == ""){
              setMessage('Please fill in all fields');
              setSubmitting(false);
            }else{
              handleLogin(values, setSubmitting);
            }
          }}>
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=>(
              <>
                <StyledText 
                  label="Email Address" 
                  icon="email-variant" 
                  placeholder="E-Mail" 
                  keyboardType="email-address" 
                  onChangeText={handleChange('email')} 
                  onBlur={handleBlur('email')} 
                  values={values.email} 
                  style={{marginBottom:25}} 
                   />
                <StyledText 
                  label="Password" 
                  icon="lock-open" 
                  placeholder="Password"  
                  onChangeText={handleChange('password')} 
                  onBlur={handleBlur('password')} 
                  values={values.password}
                  isPassword={true} 
                  style={{marginBottom:25}} 
                />
                <MsgBox style={{marginBottom: 25}} success={isSuccessMessage} >{message || ''}</MsgBox>
                {!isSubmitting && <RegularButton onPress={handleSubmit}>Login</RegularButton>}
                {isSubmitting && <RegularButton disable={true}><ActivityIndicator size={small} color={primary} /></RegularButton>}
                <RowContainer>
                  <PressableText onPress={()=>{}}>Need New account? Click here </PressableText>
                  <PressableText onPress={()=>{}}>Forgot Password</PressableText>
                </RowContainer>
              </>
            )}
          </Formik>
        </KeyboardAvoidingContainer>
    </MainContainer>
  )
}

export default Login