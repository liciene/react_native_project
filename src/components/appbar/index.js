import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar as RNAppbar} from 'react-native-paper';
import colors from '../../styles/colors';
const AppBar = (props) => {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <RNAppbar.Header theme={{colors: {primary: colors.primaryDark}}}>
      {props.menuButton && <RNAppbar.Action icon="menu" onPress={openMenu} />}
      {props.backButton && (
        <RNAppbar.Action icon="arrow-left" onPress={onBack} />
      )}
      <RNAppbar.Content title={props.title} />
    </RNAppbar.Header>
  );
};

export default AppBar;
