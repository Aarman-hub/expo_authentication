import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';

export default function App() {
  return (
    <>
      <Signup/>
      <StatusBar style="auto" />
    </>
  );
}
