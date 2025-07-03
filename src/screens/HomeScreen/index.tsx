import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Home Page</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};

export default HomeScreen;
