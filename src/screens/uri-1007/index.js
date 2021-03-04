import React from 'react';

import {Text, View, TextInput} from 'react-native';
import styles from './styles';
import useURI1007 from './useUri1007';

const Basic1007 = () => {
  const {
    numA,
    setNumA,
    numB,
    setNumB,
    numC,
    setNumC,
    numD,
    setNumD,
    diff,
  } = useURI1007();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diferença de A*B por C*D</Text>
      <Text style={styles.textObs}>
        {
          'Obs.: Leia quatro valores inteiros A, B, C e D. Calcule e mostre a diferença do produto de A e B pelo produto de C e D.'
        }
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Valor A"
          value={numA}
          onChangeText={setNumA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor B"
          value={numB}
          onChangeText={setNumB}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor C"
          value={numC}
          onChangeText={setNumC}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor D"
          value={numD}
          onChangeText={setNumD}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`DIFERENÇA = ${diff}`}</Text>
    </View>
  );
};

export default Basic1007;
