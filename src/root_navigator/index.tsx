import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';




const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName= "Home" >
        <Stack.Screen name="Home" component = { HomeScreen } />
            <Stack.Screen name="Detail" component = { DetailScreen } />
            <Stack.Screen name="Profile" component = { ProfileScreen } />
            <Stack.Screen name="About" component = { AboutScreen } />
        </Stack.Navigator>
        </NavigationContainer>
  );
}
