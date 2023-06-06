import  {NavigationContainer}  from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {MyStack} from './navigation';


export default function App() {
  return (
 
     <NavigationContainer>
      <MyStack/>
     </NavigationContainer>
     
  
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    backgroundColor: '#fff',
    paddingHorizontal:16,

  },
});
