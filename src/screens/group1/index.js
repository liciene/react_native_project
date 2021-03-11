import React from 'react';
import useGroup1 from './useGroup1';
import styles from '../../styles/general';
import {Button, Text} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Group1 = () => {
  const {navigate1001, navigate1002, navigate1003, navigate1004} = useGroup1();
  return (
    <>
      <AppBar title="Página 1" menuButton />
      <Background>
        <Divider />
        <Divider />
        <Text style={styles.text}>Atividades 1001 à 1004</Text>
        <Divider />
        <Divider />
        <Button onPress={navigate1001} mode="contained">
          1001 - Soma de dois números
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1002} mode="contained">
          1002 - Área do círculo
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1003} mode="contained">
          1003 - Subtração entre dois números
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1004} mode="contained">
          1004 - Cálculo de produto
        </Button>
      </Background>
    </>
  );
};

export default Group1;
