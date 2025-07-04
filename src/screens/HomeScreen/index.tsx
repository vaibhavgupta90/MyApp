import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import CustomButton from '@components/CustomButton';
import CustomTitle from '@components/CustomTitle';


const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) =>  {
    return (
        <View style={styles.container}>
            <CustomTitle title={'Home Screen'} testId='home'/>
            <CustomButton title={'About screen'} onPress={
                () => navigation.navigate('About') } />
        </View>
    );
}
export default HomeScreen;