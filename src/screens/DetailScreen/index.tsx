import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const DetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is the Details Page</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DetailScreen;
