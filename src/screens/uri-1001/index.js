import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import useURI1001 from './useUri1001';

const Basic1001 = () => {
  const {num1, num2, result, setNum1, setNum2} = useURI1001();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Soma de dois números</Text>
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
      <Text style={styles.text}>{`Resultado: ${result}`}</Text>
    </View>
  );
};

export default Basic1001;
