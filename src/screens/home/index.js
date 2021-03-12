import React from 'react';
import useHome from './useHome';
import styles from './styles';
import {Button, Text} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';

const Home = () => {
  const {openModal} = useHome();
  return (
    <Background>
      <Divider />
      <Divider />
      <Text style={styles.text}>Bem vindo(a)!</Text>
      <Divider />
      <Divider />
      <Button onPress={openModal} mode="contained">
        Atividades URI Online
      </Button>
    </Background>
  );
};

export default Home;
