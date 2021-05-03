import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './Screens/SignUpLoginScreen';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <SignUpLoginScreen />
      </SafeAreaProvider>
    )
  }
}
