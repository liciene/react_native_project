import React from 'react';
import {View} from 'react-native';
import useUri1016 from './useUri1016';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1016 = () => {
  const {distance, setDistance, result, calcTime} = useUri1016();
  return (
    <>
      <AppBar title="1016" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Minutos de distância</Text>
        <Text style={styles.textObs}>
          {
            'Lê a distância (em Km) e calcula o tempo (em minutos) para um carro tomar distância do outro'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Distância (Km)"
            mode="outlined"
            style={styles.textInput}
            value={distance}
            onChangeText={setDistance}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`${result} minutos`}</Text>
        <Divider />
        <Button onPress={calcTime} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1016;
