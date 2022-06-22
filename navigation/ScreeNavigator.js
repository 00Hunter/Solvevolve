import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../Screen/MainScreen';
import FinalScreen from '../Screen/FinalScreen';

const Stack=createStackNavigator();

const ScreenNavigation=()=>{
    return(
    <Stack.Navigator
    screenOptions={{
       headerShown:false
    }}>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="FinalScreen" component={FinalScreen}/>
    </Stack.Navigator>
    )
}

export default ScreenNavigation;