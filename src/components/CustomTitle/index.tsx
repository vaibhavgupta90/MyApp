import React from 'react';
import { Text } from 'react-native';
import { styles } from './style';

interface CustomTitleProps {
    title: string;
    color?: string;
    fontSize?: number;
    testId?: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ title, color, fontSize, testId }) => {
    return (
        <Text testID={testId} style={[styles.title, { color, fontSize }]}>
            {title}
        </Text>
    );
};
export default CustomTitle;
