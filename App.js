import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/auth/Login';

export default function App() {
  return (
    <>
      <Login/>
      <StatusBar style="auto" />
    </>
  );
}
