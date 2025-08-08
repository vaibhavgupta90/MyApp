import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import SettingScreen from '@screens/SettingScreen';


const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeMain" component={HomeScreen} />
            <HomeStack.Screen name="Settings" component={SettingScreen} />
        </HomeStack.Navigator>
    );
}
