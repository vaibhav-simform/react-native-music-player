import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import styles from './CustomButton.styles';

interface CustomButtonProp {
  source: ImageSourcePropType;
}

const CustomButton: FC<CustomButtonProp> = ({source}) => {
  return (
    <TouchableOpacity>
      <Image style={styles.IconContainer} source={source} />
    </TouchableOpacity>
  );
};

export default CustomButton;
