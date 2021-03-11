import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1010 from './useUri1010';
import {Button, Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1010 = () => {
  const {
    amount1,
    setAmount1,
    value1,
    setValue1,
    amount2,
    setAmount2,
    value2,
    setValue2,
    total,
    calcTotalPrice,
  } = useURI1010();
  return (
    <>
      <AppBar title="1010" backButton />
      <Background style={styles.container}>
        <Divider />
        <Text style={styles.text}>Cálculo de compra</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Quantidade da peça 1"
            mode="outlined"
            value={amount1}
            onChangeText={setAmount1}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Valor da peça 1"
            mode="outlined"
            value={value1}
            onChangeText={setValue1}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Quantidade da peça 2"
            mode="outlined"
            value={amount2}
            onChangeText={setAmount2}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Valor da peça2"
            mode="outlined"
            value={value2}
            onChangeText={setValue2}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`VALOR A PAGAR: R$ ${total}`}</Text>
        <Divider />
        <Button onPress={calcTotalPrice} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1010;
