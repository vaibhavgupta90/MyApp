import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import CustomButton from '@components/CustomButton';
import CustomTitle from '@components/CustomTitle';

const AboutScreen: React.FC<{ navigation: any }> = ({ navigation }) =>  {
    return (
        <View style={styles.container}>
            <CustomTitle title={'About Screen'} testId='about' />
            <CustomButton title={'Profile screen'} onPress={
                () => navigation.navigate('Profile')} />
        </View>
    );
}
export default AboutScreen;