import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import useURI1012 from './useUri1012';

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
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de área</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="A"
          value={num1}
          onChangeText={setNum1}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="B"
          value={num2}
          onChangeText={setNum2}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="C"
          value={num3}
          onChangeText={setNum3}
        />
      </View>
      <Text style={styles.text}>{`TRIÂNGULO = ${tri}`}</Text>
      <Text style={styles.text}>{`CÍRCULO = ${circ}`}</Text>
      <Text style={styles.text}>{`TRAPÉZIO = ${trap}`}</Text>
      <Text style={styles.text}>{`QUADRADO = ${quad}`}</Text>
      <Text style={styles.text}>{`RETÂNGULO = ${ret}`}</Text>
      <TouchableOpacity onPress={calcArea}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1012;
