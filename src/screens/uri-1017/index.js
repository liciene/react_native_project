import React from 'react';
import {View} from 'react-native';
import useUri1017 from './useUri1017';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1017 = () => {
  const {hour, setHour, km, setKm, result, calcFuel} = useUri1017();

  return (
    <>
      <AppBar title="1017" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Gasto de combustível</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Hora"
            mode="outlined"
            style={styles.textInput}
            value={hour}
            onChangeText={setHour}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            label="Kilometragem"
            mode="outlined"
            style={styles.textInput}
            value={km}
            onChangeText={setKm}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`${result} litros`}</Text>
        <Divider />
        <Button onPress={calcFuel} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1017;
