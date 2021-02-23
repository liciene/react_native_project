import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import useURI1004 from './useUri1004';

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
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de produto</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={num1}
          onChangeText={setNum1}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={num2}
          onChangeText={setNum2}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`PROD = ${result}`}</Text>
      <TouchableOpacity onPress={multiplyTwoNumbers}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Multiplicar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1004;
