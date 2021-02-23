import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import useURI1003 from './useUri1003';

const Basic1003 = () => {
  const {numA, setNumA, numB, setNumB, total, sumTwoNumbers} = useURI1003();
  return (
    <View style={styles.container}>
      <Text>Soma de dois números</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={numA}
          onChangeText={setNumA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={numB}
          onChangeText={setNumB}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`SOMA = ${total}`}</Text>
      <TouchableOpacity onPress={sumTwoNumbers}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1003;
