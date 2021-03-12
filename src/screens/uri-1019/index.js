import React from 'react';
import {View} from 'react-native';
import useUri1019 from './useUri1019';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1019 = () => {
  const {
    getSeconds,
    setGetSeconds,
    hour,
    minute,
    second,
    calcTime,
  } = useUri1019();
  return (
    <>
      <AppBar title="1019" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Conversão de tempo</Text>
        <Text style={styles.textObs}>
          {
            'Obs: Recebe valor em segundos e retorna valor em horas, mitunos e segundos'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Segundos"
            mode="outlined"
            style={styles.textInput}
            value={getSeconds}
            onChangeText={setGetSeconds}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`${hour}:${minute}:${second}`}</Text>
        <Divider />
        <Button onPress={calcTime} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1019;
