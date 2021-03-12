import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/general';
import useURI1012 from './useUri1012';
import {Button, Text, TextInput} from 'react-native-paper';
import Background from '../../components/backgroud';
import Divider from '../../components/divider';
import AppBar from '../../components/appbar';

const Basic1012 = () => {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    num3,
    setNum3,
    tri,
    circ,
    trap,
    quad,
    ret,
    calcArea,
  } = useURI1012();
  return (
    <>
      <AppBar title="1012" backButton />
      <Background>
        <Divider />
        <Text style={styles.text}>Cálculo de área</Text>
        <Divider />
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInput}
            label="A"
            mode="outlined"
            value={num1}
            onChangeText={setNum1}
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="B"
            mode="outlined"
            value={num2}
            onChangeText={setNum2}
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            label="C"
            mode="outlined"
            value={num3}
            onChangeText={setNum3}
          />
        </View>
        <Divider />
        <Text style={styles.text}>{`TRIÂNGULO = ${tri}`}</Text>
        <Text style={styles.text}>{`CÍRCULO = ${circ}`}</Text>
        <Text style={styles.text}>{`TRAPÉZIO = ${trap}`}</Text>
        <Text style={styles.text}>{`QUADRADO = ${quad}`}</Text>
        <Text style={styles.text}>{`RETÂNGULO = ${ret}`}</Text>
        <Divider />
        <Button onPress={calcArea} mode="contained">
          Calcular
        </Button>
      </Background>
    </>
  );
};

export default Basic1012;
