import React from 'react';
import {View} from 'react-native';
import useUri1020 from './useUri1020';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1020 = () => {
  const {getDays, setGetDays, year, month, day, calcAge} = useUri1020();
  return (
    <>
      <AppBar title="1020" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Idade em dias</Text>
        <Text style={styles.textObs}>
          {
            'Obs.: Recebe o valor em dias e transforma em anos (considerando 365 dias), meses (considerando 30 dias) e dias'
          }
        </Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Dias"
            mode="outlined"
            style={styles.textInput}
            value={getDays}
            onChangeText={setGetDays}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>
          {`${year} ano(s) \n${month} mes(es) \n${day} dia(s)`}
        </Text>
        <Divider />
        <Button onPress={calcAge} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1020;
