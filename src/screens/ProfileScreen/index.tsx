import React from 'react';
import { View} from 'react-native';
import { styles } from './styles';
import CustomButton from '@components/CustomButton';
import CustomTitle from '@components/CustomTitle';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CustomTitle title={'Profile Screen'} testId='profile' />
            <CustomButton title={'Detail screen'} onPress={
                () => navigation.navigate('Detail')} />
        </View>
    );
}
export default ProfileScreen;