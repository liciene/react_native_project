import React from 'react';
import useGroup2 from './useGroup2';
import styles from '../../styles/general';
import {Button, Text} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Group2 = () => {
  const {navigate1005, navigate1006, navigate1007, navigate1008} = useGroup2();
  return (
    <>
      <AppBar title="Página 2" menuButton />
      <Background>
        <Divider />
        <Divider />
        <Text style={styles.text}>Atividades 1005 à 1008</Text>
        <Divider />
        <Divider />
        <Button onPress={navigate1005} mode="contained">
          1005 - Média entre duas notas
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1006} mode="contained">
          1006 - Média entre três notas
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1007} mode="contained">
          1007 - Diferença de A*B por C*D
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1008} mode="contained">
          1008 - Cálculo de salário
        </Button>
      </Background>
    </>
  );
};

export default Group2;
