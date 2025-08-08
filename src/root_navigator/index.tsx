// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import DetailScreen from '../screens/DetailScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import AboutScreen from '../screens/AboutScreen';
// import BiometricAuth from '@screens/Login/BiometricAuth';





// const Stack = createNativeStackNavigator();

// export default function RootNavigation() {

//     const config = {
//         screens: {
//             Home: 'home',
//             Detail: 'detail/:id',        // dynamic param "id"
//             Profile: 'profile',
//             About: 'about',
//             Authentication: 'auth',
//         },
//     };

//     const linking = {
//         prefixes: ['shopeasy://', 'https://shopeasy.com', 'http://localhost:3000'],
//         config,
//     };

//     return (
//         <NavigationContainer linking={linking}>
//             <Stack.Navigator initialRouteName= "Authentication" >
//             <Stack.Screen name="Home" component = { HomeScreen } />
//             <Stack.Screen name="Detail" component = { DetailScreen } />
//             <Stack.Screen name="Profile" component = { ProfileScreen } />
//             <Stack.Screen name="About" component = { AboutScreen } />
//             <Stack.Screen name="Authentication" component={BiometricAuth} />
//         </Stack.Navigator>
//         </NavigationContainer>
//   );
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import BiometricAuth from '@screens/Login/BiometricAuth';
import HomeStackNavigator from './Homestake';





const Stack = createNativeStackNavigator();

export default function RootNavigation() {

    const config = {
        screens: {
            Authentication: 'auth',
            Home: {
                path: 'home',
                screens: {
                    HomeMain: '',
                    Settings: 'settings/:type'
                },
            },
            Detail: 'detail/:id',
            Profile: 'profile',
            About: 'about',
        },
    };


    const linking = {
        prefixes: ['shopeasy://', 'https://shopeasy.com', 'http://localhost:3000'],
        config,
    };

    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Authentication" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeStackNavigator} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Authentication" component={BiometricAuth} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
