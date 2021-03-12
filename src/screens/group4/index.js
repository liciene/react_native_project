import React from 'react';
import useGroup4 from './useGroup4';
import styles from '../../styles/general';
import {Button, Text} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Group4 = () => {
  const {navigate1013, navigate1014, navigate1015, navigate1016} = useGroup4();
  return (
    <>
      <AppBar title="Página 4" menuButton />
      <Background>
        <Divider />
        <Divider />
        <Text style={styles.text}>Atividades 1013 à 1016</Text>
        <Divider />
        <Divider />
        <Button onPress={navigate1013} mode="contained">
          1013 - Maior absoluto
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1014} mode="contained">
          1014 - Consumo de combustível
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1015} mode="contained">
          1015 - Distância entre dois pontos
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1016} mode="contained">
          1016 - Distância em minutos
        </Button>
      </Background>
    </>
  );
};

export default Group4;
