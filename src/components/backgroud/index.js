import React from 'react';
import {useTheme} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const Background = (props) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {props.children}
    </View>
  );
};

export default Background;
