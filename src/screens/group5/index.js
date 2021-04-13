import React from 'react';
import useGroup5 from './useGroup5';
import styles from '../../styles/general';
import {Text, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Group5 = () => {
  const {navigate1017, navigate1018, navigate1019, navigate1020} = useGroup5();
  return (
    <>
      <AppBar title="Página 5" menuButton />
      <Background>
        <Divider />
        <Divider />
        <Text style={styles.text}>Atividades 1017 à 1020</Text>
        <Divider />
        <Divider />
        <Button onPress={navigate1017} mode="contained">
          1017 - Gasto de combustível
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1018} mode="contained">
          1018 - Quantidade de cédulas
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1019} mode="contained">
          1019 - Conversão de tempo
        </Button>
        <Divider />
        <Divider />
        <Button onPress={navigate1020} mode="contained">
          1020 - Idade em dias
        </Button>
      </Background>
    </>
  );
};

export default Group5;
