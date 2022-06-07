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



const Signup = ({}) => {


  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleSignup = async (credentials, setSubmitting) =>{
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
          <Formik initialValues={{email:'', username:'', password:'', confirmPassword:''}} handleSubmit={(values,{setSubmitting})=>{
            if(values.email == "", values.username = "" || values.password == "", values.confirmPassword == ""){
              setMessage('Please fill in all fields');
              setSubmitting(false);
            } else if(values.password !== values.confirmPassword){
                setMessage('Password not match!');
                setSubmitting(false);
            }else{
              handleSignup(values, setSubmitting);
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
                    label="Username" 
                    icon="account" 
                    placeholder="Username" 
                    onChangeText={handleChange('username')} 
                    onBlur={handleBlur('username')} 
                    values={values.username} 
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
                <StyledText 
                  label="Confirm Password" 
                  icon="lock-open" 
                  placeholder="Confirm Passowrd"  
                  onChangeText={handleChange('confirmpassword')} 
                  onBlur={handleBlur('confirmpassword')} 
                  values={values.confirmpassword}
                  isPassword={true} 
                  style={{marginBottom:25}} 
                />
                <MsgBox style={{marginBottom: 25}} success={isSuccessMessage} >{message || ''}</MsgBox>
                {!isSubmitting && <RegularButton onPress={handleSubmit}>Sign Up</RegularButton>}
                {isSubmitting && <RegularButton disable={true}><ActivityIndicator size={24} color={primary} /></RegularButton>}
                <RowContainer>
                  <PressableText onPress={()=>{}}>Have an account? Login here </PressableText>
                </RowContainer>
              </>
            )}
          </Formik>
        </KeyboardAvoidingContainer>
    </MainContainer>
  )
}

export default Signup