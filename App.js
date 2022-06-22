import { useState,react } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import foodContext from './Context/foodContext';
import MainScreen from './Screen/MainScreen';
import ScreenNavigation from './navigation/ScreeNavigator';

export default function App() {

  const [food,setFood]=useState([])
  return (
    <foodContext.Provider value={{food,setFood}}>
    <NavigationContainer>
    <ScreenNavigation/>
    </NavigationContainer>
    </foodContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
