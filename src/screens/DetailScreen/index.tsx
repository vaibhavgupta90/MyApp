import React from 'react';
import { View} from 'react-native';
import { styles } from './styles';
import CustomButton from '@components/CustomButton';
import CustomTitle from '@components/CustomTitle';

 const DetailScreen: React.FC<{ navigation: any }> = ({ navigation }) =>  {
    return (
        <View style={styles.container}>
            <CustomTitle title={'Detail Screen'} testId='detail' />
            <CustomButton title={'Go Back'} onPress={
                () => navigation.pop()} />
        </View>
    );
}
export default DetailScreen;
