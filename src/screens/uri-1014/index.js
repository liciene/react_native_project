import React from 'react';
import {View} from 'react-native';
import useUri1014 from './useUri1014';
import styles from '../../styles/general';
import {Text, TextInput, Button} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1014 = () => {
  const {kmTotal, setKmTotal, fuel, setFuel, total, calcFuel} = useUri1014();
  return (
    <>
      <AppBar title="1014" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Consumo de combustível</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            label="Km"
            mode="outlined"
            style={styles.textInput}
            value={kmTotal}
            onChangeText={setKmTotal}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            label="Combustível"
            mode="outlined"
            style={styles.textInput}
            value={fuel}
            onChangeText={setFuel}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>{`${total} Km/L`}</Text>
        <Divider />
        <Button onPress={calcFuel} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};
export default Basic1014;
