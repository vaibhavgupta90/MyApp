import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>This is the Details Page</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DetailScreen;
