import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import useURI1013 from './useUri1013';

const Basic1013 = () => {
  const {
    numA,
    setNumA,
    numB,
    setNumB,
    numC,
    setNumC,
    higher,
    getHigherValue,
  } = useURI1013();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maior absoluto</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="A"
          value={numA}
          onChangeText={setNumA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="B"
          value={numB}
          onChangeText={setNumB}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="C"
          value={numC}
          onChangeText={setNumC}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`${higher} é maior`}</Text>
      <TouchableOpacity onPress={getHigherValue}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Basic1013;
