import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import colors from '../../styles/colors';

const StatusBar = () => {
  return <RNStatusBar backgroundColor={colors.primaryDark} />;
};

export default StatusBar;
