import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

interface Props {
  title: string;
  onPress: () => void;
}

interface StyleProps {
  buttonStyle?: object;
  textStyle?: object;
}

const CustomButton: React.FC<Props & StyleProps> = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={{...styles.button, ...buttonStyle}} onPress={onPress}>
      <Text style={{ ...styles.text, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};



export default CustomButton;
