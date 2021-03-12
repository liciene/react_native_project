import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1004 from './useUri1004';
import {Button, Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1004 = () => {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    multiplyTwoNumbers,
  } = useURI1004();
  return (
    <>
      <AppBar title="1004" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Cálculo de produto</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="Digite aqui"
            mode="outlined"
            value={num1}
            onChangeText={setNum1}
            keyboardType="number-pad"
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="Digite aqui"
            mode="outlined"
            value={num2}
            onChangeText={setNum2}
            keyboardType="number-pad"
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`PRODUTO = ${result}`}</Text>
        <Divider />
        <Button onPress={multiplyTwoNumbers} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1004;
