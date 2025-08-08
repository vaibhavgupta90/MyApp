import React from 'react';
import {View} from 'react-native';
import { styles } from './styles';
import CustomButton from '@components/CustomButton';
import CustomTitle from '@components/CustomTitle';
import Analytics from 'appcenter-analytics';

 const DetailScreen: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) =>  {
     const id = route?.params?.id || '00';
     console.log('In Detail Screen==', id);
    
     Analytics.trackEvent("My custom event");
    return (
        <View style={styles.container}>
            <CustomTitle title={'Detail Screen'} testId='detail' />
            <CustomTitle title={`We have detail data id=${id}`} />
            <CustomButton title={'Go Back'} onPress={
                () => 
                    navigation.pop()
                } />
        </View>
    );
}
export default DetailScreen;