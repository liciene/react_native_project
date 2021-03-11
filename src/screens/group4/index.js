import React from 'react';
import useGroup4 from './useGroup4';
import styles from '../../styles/general';
import {Button, Text} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Group4 = () => {
  const {navigate1013} = useGroup4();
  return (
    <>
      <AppBar title="Página 4" menuButton />
      <Background>
        <Divider />
        <Divider />
        <Text style={styles.text}>Atividades 1013</Text>
        <Divider />
        <Divider />
        <Button onPress={navigate1013} mode="contained">
          1013 - Maior absoluto
        </Button>
      </Background>
    </>
  );
};

export default Group4;
