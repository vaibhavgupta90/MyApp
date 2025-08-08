import React from 'react';
import { View } from 'react-native';
import CustomButton from '@components/CustomButton';
import CustomTitle from '@components/CustomTitle';
import { styles } from './styles';
import Analytics from 'appcenter-analytics';

const SettingScreen: React.FC<{ navigation: any }> = ({ navigation, route }) => {
    console.log('In Setting Screen==', route.params.type);
    const data = {
        name: 'vaibhav',
        age: 20,
        address: {
            city: 'Pune',
            state: 'Maharashtra'
        }
    };
    Analytics.trackEvent("My custom event");
    Analytics.trackEvent("Setting screen Events");
    Analytics.trackEvent(JSON.stringify(data));
    return (
        <View style={styles.container}>
            <CustomTitle title={'Settings Screen'} testId='about' />
            <CustomTitle title={`We have data id=${route.params.type}`} />
            <CustomButton title={'Settings'} onPress={
                () => { navigation.navigate('Authentication')}} />
        </View>
    );
}
export default SettingScreen;