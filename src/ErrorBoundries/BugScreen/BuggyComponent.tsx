import React from 'react';
import { View, Text, Button } from 'react-native';

const Fallback = ({ error, resetError }) => {
    console.log('Fallback Error===',error);
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>⚠️ Something went wrong</Text>
        <Text selectable style={{ marginBottom: 10 }}>{error.toString()}</Text>
        <Button title="Try Again" onPress={resetError} />
    </View>
)};

export default Fallback;