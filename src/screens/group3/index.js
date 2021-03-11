import React from 'react';
import useGroup3 from './useGroup3';
import styles from '../../styles/general';
import {Button, Text} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Group3 = () => {
  const {navigate1009, navigate1010, navigate1011, navigate1012} = useGroup3();
  return (
    <>
      <AppBar title="Página 3" menuButton />
      <Background>
        <Divider />
        <Divider />
        <Text style={styles.text}>Atividades 1009 à 1012</Text>
        <Divider />
        <Divider />
        <Button onPress={navigate1009} mode="contained">
          1009 - Salário com bônus
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1010} mode="contained">
          1010 - Cálculo de compra
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1011} mode="contained">
          1011 - Volume de uma esfera
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1012} mode="contained">
          1012 - Cálculo de área
        </Button>
      </Background>
    </>
  );
};

export default Group3;
